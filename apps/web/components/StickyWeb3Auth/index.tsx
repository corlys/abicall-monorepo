"use client"

import Button from "@web/components/Buttons"


const StickyWeb3Auth = () => {
  return (
    <div className="fixed max-w-2xl bg-neutral-500 bg-opacity-80 p-4 inset-x-0 top-8 flex items-center justify-between mx-auto rounded-3xl border-2 border-neutral-300 shadow-2xl">
      <h2 className="text-4xl font-thin text-neutral-300">ABIcall</h2>
      <Button className="bg-neutral-600 text-white font-thin" >Connect</Button>
    </div>
  )
}

export default StickyWeb3Auth;
