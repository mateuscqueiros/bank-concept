"use client";

import { useClickOutside } from "@/hooks/use-click-outside";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/stores";
import { IconX } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

type ModalProps = {
  name: string;
  title: string;
} & React.PropsWithChildren;

export function Modal({ name, title, children }: ModalProps) {
  const modals = useModalStore.use.modals();
  const thisModal = modals.find((modal) => modal.name === name);
  const closeModal = useModalStore((state) => state.closeModal);

  const modalRef = useRef(null);

  useClickOutside(modalRef, () => closeModal(name));

  return (
    <div
      ref={modalRef}
      data-modal={name}
      className={cn([
        "flex flex-col w-[400px] h-[540px] bg-bg max-w-[80%] max-h-screen rounded-xl px-6 py-8 z-50",
        thisModal?.open ? "flex" : "hidden",
      ])}
    >
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="cursor-pointer" onClick={() => closeModal(name)}>
          <IconX />
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
