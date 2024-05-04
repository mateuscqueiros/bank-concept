"use client";

import { Modal } from "@/components/elements/Modal";
import { TransactionFormType } from "../../types";
import { useTransactionStore } from "@/stores";
import { uuid } from "@/lib/utils";
import { DefaultTransactionForm } from "../Form";

export function CreateTransactionModal() {
  const createTransaction = useTransactionStore.use.create();

  const onSubmit = (data: TransactionFormType) => {
    createTransaction({ id: uuid(), ...data });
  };

  return (
    <Modal title="Transação" name="createTransaction">
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
