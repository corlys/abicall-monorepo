"use client"

import { ComponentPropsWithoutRef } from "react";
import cn from "@web/utils/cn";

import Button from "@web/components/Buttons";

export type ModalProps = ComponentPropsWithoutRef<"div"> & {
  open?: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div className={cn("fixed inset-0 z-10 bg-gray-600/90 text-white", `${open ? "block" : "hidden"}`)}>
      <div className="relative w-full max-w-sm mx-auto">
        <Button className="absolute top-2 right-0 rounded-full cursor-pointer shadow-xl" onClick={onClose}>X</Button>
        <div className="overflow-hidden bg-neutral-700">{children}</div>
      </div>
    </div>
  )
}

export default Modal;
