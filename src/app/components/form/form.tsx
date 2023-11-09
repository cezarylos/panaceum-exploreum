'use client';

import EthAddressInput, { EthAddressInputRef } from '@/app/components/eth-address-input/eth-address-input';
import { headingText, inputLabel, inputPlaceholder, submitButtonText } from '@/app/components/form/form.const';
import { useRouter } from 'next/navigation';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';

import styles from './form.module.scss';

export default function Form(): ReactElement {
  const router = useRouter();

  const [ethAddress, setEthAddress] = useState('');
  const [isFromValid, setIsFormValid] = useState(false);

  const inputRef = useRef<EthAddressInputRef | null>(null);

  const handleInputChange = (value: string, isValid: boolean): void => {
    setEthAddress(value);
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    inputRef.current?.clearInput();
    router.push(`/address/${ethAddress}`);
  };

  const isSubmitButtonDisabled = !isFromValid || !ethAddress;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={styles.text}>{headingText}</p>
      <EthAddressInput onChange={handleInputChange} ref={inputRef} placeholder={inputPlaceholder} label={inputLabel} />
      <button type="submit" disabled={isSubmitButtonDisabled} className={styles.submitButton}>
        {submitButtonText}
      </button>
    </form>
  );
}
