"use client";

import { Modal } from "@/components/elements/Modal";
import { z } from "zod";

const transactionSchema = z.object({
  username: z.string(),
});

type CreateTransactionModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function CreateTransactionModal({
  open,
  setOpen,
}: CreateTransactionModalProps) {
  return (
    <Modal title="Transação" id="transaction" open={open} setOpen={setOpen}>
      <form className="mt-5 flex flex-col justify-between h-full"></form>
    </Modal>
  );
}
