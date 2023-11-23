'use client';

import { invalidAddressText } from '@/app/components/eth-address-input/eth-address-input.const';
import { useEthAddressInputState } from '@/app/components/eth-address-input/use-eth-address-input.state';
import { classNames } from '@/app/utils/classNames';
import { forwardRef, ReactElement, Ref, useRef } from 'react';

import styles from './eth-address-input.module.scss';

export type EthAddressOnchange = (value: string, isValid: boolean) => void;

interface EthAddressInputProps {
  onChange: EthAddressOnchange;
  placeholder?: string;
  label?: string;
}

export interface EthAddressInputRef {
  clearInput: () => void;
  focus: () => void;
}

function EthAddressInput({ onChange, placeholder }: EthAddressInputProps, ref: Ref<EthAddressInputRef>): ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { inputValue, handleInputChange, isValidAddress } = useEthAddressInputState({
    ref,
    onChange,
    inputRef,
  });

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        name={'ethAddress'}
        type={'text'}
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={classNames(styles.input, !isValidAddress && styles.inputInvalid)}
      />
      {!isValidAddress && <span className={styles.errorText}>{invalidAddressText}</span>}
    </div>
  );
}

export default forwardRef(EthAddressInput);
