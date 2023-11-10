'use client';

import { currentPageText, nextText, prevText } from '@/app/components/pagination/pagination.const';
import { defaultPageOffset } from '@/app/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

import styles from './pagination.module.scss';

interface PaginationProps {
  currentPageOffsetResult: number;
}

export default function Pagination({ currentPageOffsetResult }: PaginationProps): ReactElement {
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string): void => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const isPrevDisabled = currentPage === 1;
  const inNextDisabled = currentPageOffsetResult === +defaultPageOffset;

  const onNext = (): void => {
    if (inNextDisabled) {
      return;
    }
    createPageURL(currentPage + 1);
  };

  const onPrev = (): void => {
    if (isPrevDisabled) {
      return;
    }
    createPageURL(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <span>
        {currentPageText} <strong>{currentPage}</strong>
      </span>
      <button disabled={isPrevDisabled} onClick={onPrev}>
        {prevText}
      </button>
      <button disabled={inNextDisabled} onClick={onNext}>
        {nextText}
      </button>
    </div>
  );
}
