import Transactions from '@/app/components/transactions/transactions';
import { ApiService } from '@/app/services/api/api.service';
import { SortType, TransactionInterface } from '@/app/services/api/typings';
import { redirect, RedirectType } from 'next/navigation';
import { ReactElement } from 'react';

interface AddressProps {
  params: {
    address: string;
  };
  searchParams: {
    page?: string;
    offset?: string;
    sort?: SortType;
  };
}

export default async function Address({
  params: { address },
  searchParams: { page, offset, sort },
}: AddressProps): Promise<ReactElement> {
  if (!address) {
    redirect('/', RedirectType.replace);
  }
  const { status, message, result } = await ApiService.getListOfTransactions({ address, page, offset, sort });
  if (status === '0') {
    throw new Error(result.length === 0 ? message : (result as string));
  }

  return <Transactions transactions={result as Array<TransactionInterface>} />;
}
