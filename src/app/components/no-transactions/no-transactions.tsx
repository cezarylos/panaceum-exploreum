'use client';

import GoBackButton from '@/app/components/go-back-button/go-back-button';
import { agdasima } from '@/app/styles/fonts';
import { classNames } from '@/app/utils/classNames';

import styles from './no-transactions.module.scss';

export default function NoTransactions({ message }: { message?: string }) {
  return (
    <div className={styles.container}>
      <h2 className={classNames(styles.errorText, agdasima.className)}>{message || 'No transactions found'}</h2>
      <GoBackButton />
    </div>
  );
}
