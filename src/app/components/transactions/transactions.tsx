import { TransactionInterface } from '@/app/services/api/typings';
import { etherFormatter } from '@/app/utils/etherFormatter';
import { Fragment, ReactElement, useMemo } from 'react';

import styles from './transactions.module.scss';

interface TransactionsProps {
  transactions: TransactionInterface[];
}

export default function Transactions({ transactions }: TransactionsProps): ReactElement {
  const data = useMemo(
    (): TransactionInterface[] =>
      transactions.map(transaction => ({
        ...transaction,
        value: etherFormatter(transaction.value),
        txnFee: etherFormatter(+transaction.gasPrice * +transaction.gasUsed),
      })),
    [transactions],
  );

  return (
    <section>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>Transaction Hash</div>
        <div className={styles.tableHeader}>Method</div>
        <div className={styles.tableHeader}>Block</div>
        <div className={styles.tableHeader}>Age</div>
        <div className={styles.tableHeader}>From</div>
        <div className={styles.tableHeader}>To</div>
        <div className={styles.tableHeader}>Value</div>
        <div className={styles.tableHeader}>Txn Fee</div>

        {data.map(transaction => (
          <Fragment key={transaction.hash}>
            <div className={styles.tableData}>{transaction.hash}</div>
            <div className={styles.tableData}>{transaction.functionName}</div>
            <div className={styles.tableData}>{transaction.blockNumber}</div>
            <div className={styles.tableData}>{transaction.timeStamp}</div>
            <div className={styles.tableData}>{transaction.from}</div>
            <div className={styles.tableData}>{transaction.to}</div>
            <div className={styles.tableData}>{transaction.value}</div>
            <div className={styles.tableData}>{transaction.txnFee}</div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
