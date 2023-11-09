'use client';

import EthAddressInput, { EthAddressInputRef } from '@/app/components/eth-address-input/eth-address-input';
import { useRouter } from 'next/navigation';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';

export default function Form(): ReactElement {
  const [ethAddress, setEthAddress] = useState('');
  const inputRef = useRef<EthAddressInputRef | null>(null);
  const router = useRouter();

  const handleInputChange = (value: string, isValid: boolean): void => {
    setEthAddress(value);
    console.log(isValid);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputRef.current?.clearInput();
    router.push(`/address/${ethAddress}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <EthAddressInput onChange={handleInputChange} ref={inputRef} />
      <button type="submit" disabled={false}>
        Submit
      </button>
    </form>
  );
}
