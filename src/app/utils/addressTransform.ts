export function addressTransform(address: string): string {
  const addressLength = address.length;
  return `${address.substring(0, 12)}...${address.substring(addressLength - 12)}`;
}
