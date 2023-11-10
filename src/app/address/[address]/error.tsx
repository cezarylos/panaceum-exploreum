'use client';

import GoBackButton from '@/app/components/go-back-button/go-back-button';

import styles from './error.module.scss';

export default function Error({ error }: { error: Error }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.errorText}>{error?.message || 'Error'}</h2>
      <GoBackButton />
    </div>
  );
}
