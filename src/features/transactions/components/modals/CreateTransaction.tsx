import { Modal } from "@/components/elements/Modal";
import { TransactionFormType } from "../../types";
import { useModalStore } from "@/stores";
import { uuid } from "@/lib/utils";
import { DefaultTransactionForm } from "../Form";
import { useTransactionStore } from "../../stores";

export function CreateTransactionModal() {
  const thisModalName = "createTransaction";
  const createTransaction = useTransactionStore.use.create();
  const close = useModalStore.use.close();

  const onSubmit = (data: TransactionFormType) => {
    createTransaction({ id: uuid(), ...data });
    close(thisModalName);
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
