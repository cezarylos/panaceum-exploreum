'use client';

import { useEthAddressInputState } from '@/app/components/eth-address-input/use-eth-address-input.state';
import { classNames } from '@/app/utils/classNames';
import { forwardRef, ReactElement, Ref } from 'react';

import styles from './eth-address-input.module.scss';

export type EthAddressOnchange = (value: string, isValid: boolean) => void;

interface EthAddressInputProps {
  onChange: EthAddressOnchange;
  placeholder?: string;
}

export interface EthAddressInputRef {
  clearInput: () => void;
}

function EthAddressInput({ onChange, placeholder }: EthAddressInputProps, ref: Ref<EthAddressInputRef>): ReactElement {
  const { inputValue, handleInputChange, isValidAddress } = useEthAddressInputState({
    ref,
    onChange,
  });

  return (
    <div className={styles.inputWrapper}>
      <div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={classNames(!isValidAddress && styles.inputInvalid)}
        />
      </div>
      {!isValidAddress && <span>Invalid Ethereum address</span>}
    </div>
  );
}

export default forwardRef(EthAddressInput);
