"use client";

import { useState } from "react";
import { useDisconnect, useAccount } from "wagmi";

import Button from "@web/components/Buttons";
import { ModalConnectWallet } from "@web/components/Modal";
import cn from "@web/utils/cn";
import { shortenAddress } from "@web/utils/address";

const StickyWeb3Auth = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          `fixed max-w-2xl bg-neutral-500 bg-opacity-80 p-4 inset-x-0 top-8 flex items-center justify-between mx-auto rounded-3xl border-2 border-neutral-300 shadow-2xl`,
          { hidden: open }
        )}
      >
        <h2 className="text-4xl font-thin text-neutral-300">ABIcall</h2>
        {
          !isConnected &&
          <Button
            onClick={() => setOpen(true)}
            className="bg-neutral-600 text-white font-thin"
          >
            Connect
          </Button>
        }
        {
          isConnected &&
          <div className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-md shadow-md flex justify-between items-center gap-6">
            {address && shortenAddress(address)}
            <Button
              onClick={() => disconnect()}
              className="bg-neutral-600 text-white font-thin"
            >Disconnect</Button>
          </div>
        }
      </div>
      <ModalConnectWallet open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default StickyWeb3Auth;
