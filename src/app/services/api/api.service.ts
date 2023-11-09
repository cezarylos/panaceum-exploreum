import {
  AccountBalanceInterface,
  NFTTransactionInterface,
  SortType,
  TransactionInterface,
  TransactionWrapperInterface,
} from '@/app/services/api/typings';

const cacheOptions = {
  next: {
    revalidate: 60,
  },
};

const BASE_URL = process.env.NEXT_PUBLIC_ETHERSCAN_API_URL as string;

const baseAccountParams = {
  module: 'account',
  apikey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY as string,
};

export class ApiService {
  public static async GetEtherBalance(address: string): Promise<AccountBalanceInterface> {
    const params = {
      ...baseAccountParams,
      action: 'balance',
      address,
      tag: 'latest',
    };

    try {
      const res = await fetch(`${BASE_URL}?${new URLSearchParams(params).toString()}`, { ...cacheOptions });
      return res.json();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public static async getListOfTransactions({
    address,
    page = '1',
    offset = '10',
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

  public static async getListOfNFTs({
    address,
    page = 1,
    offset = 10,
    sort = 'desc',
  }: {
    address: string;
    page?: number;
    offset?: number;
    sort?: 'asc' | 'desc';
  }): Promise<TransactionWrapperInterface<NFTTransactionInterface>> {
    const params = {
      ...baseAccountParams,
      action: 'tokennfttx',
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
