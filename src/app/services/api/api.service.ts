import { defaultPageOffset } from '@/app/constants';
import { SortType, TransactionInterface, TransactionWrapperInterface } from '@/app/services/api/typings';

const cacheOptions = {
  next: {
    revalidate: 60,
  },
};

const BASE_URL = process.env.ETHERSCAN_API_URL as string;

const baseAccountParams = {
  module: 'account',
  apikey: process.env.ETHERSCAN_API_KEY as string,
};

export class ApiService {
  public static async getListOfTransactions({
    address,
    page = '1',
    offset = defaultPageOffset,
    sort = 'desc',
  }: {
    address: string;
    page?: string;
    offset?: string;
    sort?: SortType;
  }): Promise<TransactionWrapperInterface<TransactionInterface>> {
    const params = {
      ...baseAccountParams,
      action: 'txlist',
      address,
      startblock: '0',
      endblock: '99999999',
      sort,
      page: page.toString(),
      offset: offset.toString(),
    };

    try {
      const res = await fetch(`${BASE_URL}?${new URLSearchParams(params).toString()}`, { ...cacheOptions });
      return res.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
