'use client';

import { useRouter } from 'next/navigation';

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  const onGoBack = (): void => {
    router.replace('/');
  };

  return (
    <div>
      <h2>{error?.message || 'Error'}</h2>
      <button onClick={onGoBack}>Go back</button>
    </div>
  );
}
