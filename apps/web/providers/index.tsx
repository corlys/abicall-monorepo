import { type ReactNode } from "react"

import Wagmi from "@web/providers/wagmi";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <Wagmi>
        {children}
      </Wagmi>
    </>
  )
}
