import { agdasima } from '@/app/styles/fonts';
import { classNames } from '@/app/utils/classNames';
import React, { ReactElement } from 'react';

import styles from './loading.module.scss';

export default function Loading(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.loader} />
      <p className={classNames(styles.loading, agdasima.className)}>Loading</p>
    </div>
  );
}
