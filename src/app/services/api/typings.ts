export interface AccountBalanceInterface {
  status: string;
  message: string;
  result: string;
}

export interface BaseTransactionInterface {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  txnFee?: string;
}

export interface TransactionInterface extends BaseTransactionInterface {
  transactionIndex?: string;
  txreceipt_status: string;
  methodId: string;
  functionName: string;
}

export interface NFTTransactionInterface extends BaseTransactionInterface {
  contractAddress: string;
  tokenID: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
}

export interface TransactionWrapperInterface<T> {
  status: string;
  message: string;
  result: T[] | string;
}

export type SortType = 'asc' | 'desc';
