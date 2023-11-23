import Header from '@/app/components/header/header';
import { inter } from '@/app/styles/fonts';
import type { Metadata } from 'next';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import './globals.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Panaceum Exploreum',
  description: 'Ethereum explorer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.mainWrapper}>
          <Image
            src="/images/bg.webp"
            fill={true}
            alt={'Background Image'}
            objectFit={'cover'}
            objectPosition={'center center'}
            style={{ filter: 'brightness(0.4)', opacity: '0.6' }}
          />
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
