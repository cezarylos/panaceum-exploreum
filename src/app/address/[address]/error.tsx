'use client';

import NoTransactions from '@/app/components/no-transactions/no-transactions';

export default function Error({ error }: { error: Error }) {
  return <NoTransactions message={error?.message} />;
}
