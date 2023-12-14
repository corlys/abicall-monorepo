"use client"

import { ReactNode, useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";

import { wagmiConfig } from "@web/configs/wagmi";

export default function Wagmi({ children }: { children: ReactNode }) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true) }, [])

  return <WagmiConfig config={wagmiConfig}>{mounted && children}</WagmiConfig>
}
