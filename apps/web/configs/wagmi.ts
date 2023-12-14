import { Chain } from "viem";

import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
//import { SubWalletConnector } from "@subwallet/wagmi-connector";
import { InjectedConnector } from "wagmi/connectors/injected";
import { ReactNode } from "react";

export const astar = {
  id: 592,
  name: "Astar",
  network: "astar",
  nativeCurrency: {
    decimals: 18,
    name: "Astar",
    symbol: "ASTR",
  },
  rpcUrls: {
    public: { http: ["https://astar.public.blastapi.io"] },
    default: { http: ["https://astar.public.blastapi.io"] },
  },
  blockExplorers: {
    etherscan: { name: "Blockscout", url: "https://blockscout.com/astar" },
    default: { name: "Blockscout", url: "https://blockscout.com/astar" },
  },
  // contracts: {
  //   multicall3: {
  //     address: "0x7D6046156df81EF335E7e765d3bc714960B73207",
  //     blockCreated: 618_867,
  //   },
  // },
} as Chain;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [astar],
  [publicProvider()]
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  logger: {
    warn: null,
  },
  connectors: [
    new InjectedConnector({ chains }),
    //new SubWalletConnector({ chains }),
  ],
});
