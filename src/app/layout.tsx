import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import { ReactNode } from 'react';

import './globals.scss';

export const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Panaceum Exploreum',
  description: 'Ethereum blockchain explorer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
