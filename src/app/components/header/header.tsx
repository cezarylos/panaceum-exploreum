import { headerTitle1 } from '@/app/components/header/header.const';
import { agdasima } from '@/app/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <h1 className={agdasima.className}>{headerTitle1}</h1>
      </Link>
      <div className={styles.icon}>
        <Image
          fill={true}
          src="/icons/eth_icon.svg"
          alt={'Background Image'}
          objectFit={'contain'}
          objectPosition={'center center'}
        />
      </div>
    </header>
  );
}
