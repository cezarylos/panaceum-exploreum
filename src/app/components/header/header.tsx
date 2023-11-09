import { headerTitle } from '@/app/components/header/header.const';
import { ReactElement } from 'react';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <h1>{headerTitle}</h1>
    </header>
  );
}
