import React, { ReactElement } from 'react';

import styles from './loading.module.scss';

export default function Loading(): ReactElement {
  return <p className={styles.loading}>Loading...</p>;
}
