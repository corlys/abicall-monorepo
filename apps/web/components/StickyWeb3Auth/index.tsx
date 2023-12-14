"use client"

import { useState } from "react"

import Button from "@web/components/Buttons"
import { ModalConnectWallet } from "@web/components/Modal";


const StickyWeb3Auth = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed max-w-2xl bg-neutral-500 bg-opacity-80 p-4 inset-x-0 top-8 flex items-center justify-between mx-auto rounded-3xl border-2 border-neutral-300 shadow-2xl">
      <h2 className="text-4xl font-thin text-neutral-300">ABIcall</h2>
      <Button onClick={() => setOpen(true)} className="bg-neutral-600 text-white font-thin" >Connect</Button>
      <ModalConnectWallet open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

export default StickyWeb3Auth;
