import { Modal } from "@/components/elements/Modal";
import { TransactionFormType } from "../../types";
import { useModalStore, useTransactionStore } from "@/stores";
import { DefaultTransactionForm } from "../Form";

export function UpdateTransactionModal() {
  const thisModalId = "updateTransaction";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalId);

  const transactions = useTransactionStore.use.transactions();
  const updateTransaction = useTransactionStore.use.update();
  const closeModal = useModalStore.use.close();

  const transactionData = transactions.find(
    (t) => t.id === thisModalState?.dataId,
  );
  console.log(transactionData);

  const onSubmit = (data: TransactionFormType) => {
    if (thisModalState && thisModalState.dataId) {
      updateTransaction({ ...data }, thisModalState?.dataId as string);
    }
    closeModal("updateTransaction");
  };

  return (
    <Modal title="Transação" name="updateTransaction">
      {transactionData && (
        <DefaultTransactionForm
          defaultValues={transactionData}
          onSubmit={onSubmit}
        />
      )}
    </Modal>
  );
}
