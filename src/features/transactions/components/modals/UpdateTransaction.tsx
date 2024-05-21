import { Modal } from "@/components/elements/Modal";
import { useModalStore } from "@/stores";
import { DeleteTransaction } from "../../actions";
import { useTransactions, useUpdateTransaction } from "../../api";
import { TransactionFormType } from "../../types";
import { DefaultTransactionForm } from "../Form";

export function UpdateTransactionModal() {
  const { data: transactions } = useTransactions();
  const updateTransaction = useUpdateTransaction();
  const thisModalName = "updateTransaction";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const closeModal = useModalStore.use.close();

  const transactionData = transactions.find(
    (t) => t.id === thisModalState?.dataId,
  );

  const onSubmit = (data: TransactionFormType) => {
    if (thisModalState && thisModalState.dataId) {
      updateTransaction.mutate({ data, id: thisModalState.dataId as string });
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
