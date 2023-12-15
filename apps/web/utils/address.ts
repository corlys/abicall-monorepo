import { Address } from "viem";

export const shortenAddress = (address: Address) => {
  return address.slice(0, 5) + "..." + address.slice(address.length - 5, address.length)
}
