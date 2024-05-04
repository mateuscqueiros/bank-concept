"use client";

import { Modal } from "@/components/elements/Modal";
import { useState } from "react";

export function UpdateTransactionModal() {
  return (
    <Modal title="Transação" name="transaction">
      <form className="mt-5 flex flex-col justify-between h-full"></form>
    </Modal>
  );
}
