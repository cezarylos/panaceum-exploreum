'use client';

import EthAddressInput, { EthAddressInputRef } from '@/app/components/eth-address-input/eth-address-input';
import {
  exploreText,
  headingText1,
  headingText2,
  headingText3,
  inputLabel,
  inputPlaceholder,
  submitButtonText,
} from '@/app/components/form/form.const';
import { agdasima } from '@/app/styles/fonts';
import { classNames } from '@/app/utils/classNames';
import { useRouter } from 'next/navigation';
import { ChangeEvent, ReactElement, useRef, useState } from 'react';

import styles from './form.module.scss';

export default function Form(): ReactElement {
  const router = useRouter();

  const [ethAddress, setEthAddress] = useState('');
  const [isFromValid, setIsFormValid] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleInputExpandedChange = (): void => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      inputRef.current?.focus();
    }
  };

  const isSubmitButtonDisabled = !isFromValid || !ethAddress;
  const hasError = ethAddress && !isFromValid;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p className={classNames(styles.text, agdasima.className, styles.hidden)}>
        {`${headingText1}\n`}
        <span>{headingText2}</span> {headingText3}
      </p>
      <div className={classNames(styles.container, isExpanded && styles.expanded, styles.hidden)}>
        <div className={classNames(styles.wrapper, hasError && styles.hasError)}>
          <EthAddressInput
            onChange={handleInputChange}
            ref={inputRef}
            placeholder={inputPlaceholder}
            label={inputLabel}
          />
          <button className={styles.button} type="submit" disabled={isSubmitButtonDisabled}>
            {exploreText}
          </button>
          <button
            className={classNames(styles.toggleButton, agdasima.className)}
            type="button"
            onClick={handleInputExpandedChange}
          >
            <span>{submitButtonText}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
