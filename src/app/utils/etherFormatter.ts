import { ETHER_PRECISION } from '@/app/constants';
import { fromWei } from 'web3-utils';

export const etherFormatter = (value: string | number): string =>
  `${Number(fromWei(value, 'ether')).toFixed(ETHER_PRECISION)} ETH`;
