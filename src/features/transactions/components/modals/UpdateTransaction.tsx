import { Modal } from "@/components/elements/Modal";
import { TransactionFormType } from "../../types";
import { useModalStore, useTransactionStore } from "@/stores";
import { DefaultTransactionForm } from "../Form";
import { DeleteTransaction } from "../../actions";

export function UpdateTransactionModal() {
  const thisModalName = "updateTransaction";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const transactions = useTransactionStore.use.transactions();
  const updateTransaction = useTransactionStore.use.update();
  const closeModal = useModalStore.use.close();

  const transactionData = transactions.find(
    (t) => t.id === thisModalState?.dataId,
  );

  const onSubmit = (data: TransactionFormType) => {
    if (thisModalState && thisModalState.dataId) {
      updateTransaction({ ...data }, thisModalState?.dataId as string);
    }
    closeModal(thisModalName);
  };

  return (
    <Modal
      actions={
        thisModalState?.dataId !== null ? (
          <DeleteTransaction itemId={thisModalState?.dataId as string} />
        ) : undefined
      }
      title="Transação"
      name={thisModalName}
    >
      {transactionData && (
        <DefaultTransactionForm
          modalName={thisModalName}
          defaultValues={transactionData}
          onSubmit={onSubmit}
        />
      )}
    </Modal>
  );
}
