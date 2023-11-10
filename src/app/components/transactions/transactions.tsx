import { tableHeaders } from '@/app/components/transactions/transactons.const';
import { TransactionInterface } from '@/app/services/api/typings';
import { addressTransform } from '@/app/utils/addressTransform';
import { classNames } from '@/app/utils/classNames';
import { etherFormatter } from '@/app/utils/etherFormatter';
import { timestampToDaysHoursAgo } from '@/app/utils/formatTimestamp';
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
        hash: addressTransform(transaction.hash),
        timeStamp: timestampToDaysHoursAgo(transaction.timeStamp),
        from: addressTransform(transaction.from),
        to: addressTransform(transaction.to),
        value: etherFormatter(transaction.value),
        txnFee: etherFormatter(+transaction.gasPrice * +transaction.gasUsed),
      })),
    [transactions],
  );

  const renderCell = (cell: string | number, isAddressField = false): ReactElement => (
    <div className={classNames(styles.tableContent, styles.tableData, isAddressField && styles.addressField)}>
      <span>{cell}</span>
    </div>
  );

  return (
    <section>
      <div className={styles.tableContainer}>
        {tableHeaders.map(header => (
          <div key={header} className={classNames(styles.tableContent, styles.tableHeader)}>
            {header}
          </div>
        ))}

        {data.map(transaction => (
          <Fragment key={transaction.hash}>
            {renderCell(transaction.hash, true)}
            {renderCell(transaction.blockNumber)}
            {renderCell(transaction.timeStamp)}
            {renderCell(transaction.from, true)}
            {renderCell(transaction.to, true)}
            {renderCell(transaction.value)}
            {renderCell(transaction.txnFee as string)}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
