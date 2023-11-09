import { SortType } from '@/app/services/api/typings';
import { redirect, RedirectType } from 'next/navigation';

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

export default async function Address({ params: { address } }: AddressProps): Promise<void> {
  if (!address) {
    redirect('/', RedirectType.replace);
  }
}
