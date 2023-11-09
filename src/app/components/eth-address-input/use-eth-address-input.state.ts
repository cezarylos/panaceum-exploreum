import { EthAddressInputRef, EthAddressOnchange } from '@/app/components/eth-address-input/eth-address-input';
import { ChangeEvent, Ref, useImperativeHandle, useState } from 'react';
import { isAddress } from 'web3-validator';

interface UseEthAddressInputStateProps {
  ref: Ref<EthAddressInputRef>;
  onChange: EthAddressOnchange;
}

interface UseEthAddressInputStateReturn {
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValidAddress: boolean;
}

export function useEthAddressInputState({
  ref,
  onChange,
}: UseEthAddressInputStateProps): UseEthAddressInputStateReturn {
  const [inputValue, setInputValue] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value;
    const isAddressValid = val ? isAddress(val) : true;
    setIsValidAddress(isAddressValid);
    setInputValue(val);
    onChange(val, isAddressValid);
  };

  useImperativeHandle(
    ref,
    (): EthAddressInputRef => ({
      clearInput: () => {
        setInputValue('');
        setIsValidAddress(true);
      },
    }),
  );

  return {
    inputValue,
    handleInputChange,
    isValidAddress,
  };
}
