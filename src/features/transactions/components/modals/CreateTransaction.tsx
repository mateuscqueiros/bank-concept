import { Modal } from "@/components/elements/Modal";
import { getNextCategoryId, useCategories } from "@/features/categories";
import { useModalStore } from "@/stores";
import { useCreateTransaction } from "../../api";
import { TransactionFormType } from "../../types";
import { DefaultTransactionForm } from "../Form";

export function CreateTransactionModal() {
  const thisModalName = "createTransaction";
  const { data: categories } = useCategories();
  const createTransaction = useCreateTransaction();
  const close = useModalStore.use.close();

  const onSubmit = (formValues: TransactionFormType) => {
    const data = { id: getNextCategoryId(categories), ...formValues };
    createTransaction.mutate({ data });
    close(thisModalName);
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultTransactionForm onSubmit={onSubmit} />
    </Modal>
  );
}
