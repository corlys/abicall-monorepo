import { ComponentPropsWithoutRef, } from "react";
import cn from "@web/utils/cn";

type Props = ComponentPropsWithoutRef<"button"> & {
}

export default function Button({ className, ...props }: Props) {
  return <button {...props} className={cn(`flex items-center justify-between px-4 py-2 font-semibold rounded-2xl shadow-xl`, className)}>{props.children}</button>
}
