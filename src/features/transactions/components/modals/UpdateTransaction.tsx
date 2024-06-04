import { Modal } from "@/components/elements/Modal";
import { useUser } from "@/features/auth";
import { useModalStore } from "@/stores";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DeleteTransaction } from "../../actions";
import { useTransactions, useUpdateTransaction } from "../../api";
import { TransactionFormType } from "../../types";
import { DefaultTransactionForm } from "../Form";

export function UpdateTransactionModal() {
  const { data: transactions } = useTransactions();
  const { data: user } = useUser();

  const router = useRouter();
  const updateTransaction = useUpdateTransaction();
  const thisModalName = "updateTransaction";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const closeModal = useModalStore.use.close();

  const transactionData = transactions.find(
    (t) => t.id === thisModalState?.dataId,
  );

  const onSubmit = (values: TransactionFormType) => {
    if (thisModalState && thisModalState.dataId) {
      if (user) {
        const data = { ...values, userId: user.id };
        updateTransaction.mutateAsync({
          data,
          id: thisModalState.dataId as string,
        });
      } else {
        toast.error("Você não está logado", {
          action: {
            label: "Ir para login",
            onClick: () => router.push("/login"),
          },
        });
      }
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
