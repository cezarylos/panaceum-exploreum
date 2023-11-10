'use client';

import { goBackText } from '@/app/constants';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

import styles from './go-back-button.module.scss';

export default function GoBackButton(): ReactElement {
  const router = useRouter();
  const onGoBack = (): void => {
    router.replace('/');
  };

  return (
    <button className={styles.button} onClick={onGoBack}>
      {goBackText}
    </button>
  );
}
