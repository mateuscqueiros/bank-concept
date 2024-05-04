"use client";

import { Modal } from "@/components/elements/Modal";
import { useModalStore } from "@/stores";
import { z } from "zod";

const transactionSchema = z.object({
  username: z.string(),
});

export function CreateTransactionModal() {
  return (
    <Modal title="Transação" name="createTransaction">
      <form className="mt-5 flex flex-col justify-between h-full"></form>
    </Modal>
  );
}
