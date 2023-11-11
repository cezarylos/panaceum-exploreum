'use client';

import GoBackButton from '@/app/components/go-back-button/go-back-button';

import styles from './no-transactions.module.scss';

export default function NoTransactions({ message }: { message?: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.errorText}>{message || 'No transaction found'}</h2>
      <GoBackButton />
    </div>
  );
}
