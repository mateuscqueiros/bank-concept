import { Modal } from "@/components/elements/Modal";
import { uuid } from "@/lib/utils";
import { useModalStore } from "@/stores";
import { useCreateTransaction } from "../../api";
import { TransactionFormType } from "../../types";
import { DefaultTransactionForm } from "../Form";

export function CreateTransactionModal() {
  const thisModalName = "createTransaction";
  const createTransaction = useCreateTransaction();
  const close = useModalStore.use.close();

  const onSubmit = (formValues: TransactionFormType) => {
    const data = { id: uuid(), ...formValues };
    createTransaction.mutate({ data });
    close(thisModalName);
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
