import GoBackButton from '@/app/components/go-back-button/go-back-button';
import NoTransactions from '@/app/components/no-transactions/no-transactions';
import Pagination from '@/app/components/pagination/pagination';
import Transactions from '@/app/components/transactions/transactions';
import { ApiService } from '@/app/services/api/api.service';
import { SortType, TransactionInterface } from '@/app/services/api/typings';
import { redirect, RedirectType } from 'next/navigation';
import { ReactElement } from 'react';

import styles from './address.module.scss';

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

const ERROR_STATUS = '0';

export default async function Address({
  params: { address },
  searchParams: { page, offset, sort },
}: AddressProps): Promise<ReactElement> {
  if (!address) {
    redirect('/', RedirectType.replace);
  }
  const { status, message, result } = await ApiService.getListOfTransactions({ address, page, offset, sort });
  if (status === ERROR_STATUS) {
    if (result.length === 0) {
      return <NoTransactions />;
    }
    throw new Error((result as string) || message);
  }

  return (
    <div className={styles.container}>
      <GoBackButton />
      <Transactions transactions={result as Array<TransactionInterface>} />
      <Pagination currentPageOffsetResult={result.length} />
    </div>
  );
}
