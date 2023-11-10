import Form from '@/app/components/form/form';
import { ReactElement } from 'react';

import styles from './page.module.scss';

export default function Home(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Form></Form>
    </div>
  );
}
