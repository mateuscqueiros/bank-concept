"use client";

import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { IconX } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

type ModalProps = {
  id: string;
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
} & React.PropsWithChildren;

export function Modal({ id, title, open, setOpen, children }: ModalProps) {
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    setOpen(false);
  });

  return (
    <div
      ref={modalRef}
      data-modal={id}
      className={cn([
        "flex flex-col w-[400px] h-[540px] bg-bg max-w-[80%] max-h-screen rounded-xl px-6 py-8 z-50",
        open ? "flex" : "hidden",
      ])}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="cursor-pointer">
          {/* onClick={() => modalsContext.close(id)}*/}
          <IconX />
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
