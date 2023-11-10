import Header from '@/app/components/header/header';
import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.scss';
import styles from './layout.module.scss';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Panaceum Exploreum',
  description: 'Ethereum explorer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <main className={styles.mainWrapper}>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
