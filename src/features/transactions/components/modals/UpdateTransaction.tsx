"use client";

import { Modal } from "@/components/elements/Modal";
import { useState } from "react";

type UpdateTransactionModalProps = {
  open: boolean;
};

export function UpdateTransactionModal({ open }: UpdateTransactionModalProps) {
  return (
    <Modal title="Transação" id="transaction" open={open}>
      <form className="mt-5 flex flex-col justify-between h-full"></form>
    </Modal>
  );
}
