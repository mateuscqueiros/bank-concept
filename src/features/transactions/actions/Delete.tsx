import { useModalStore } from "@/stores";
import { IconTrash } from "@tabler/icons-react";
import { useDeleteTransaction } from "../api";

export type DeleteTransactionProps = {
  itemId: string;
};

export function DeleteTransaction({ itemId }: DeleteTransactionProps) {
  const closeModal = useModalStore.use.close();
  const deleteTransaction = useDeleteTransaction();
  return (
    <div>
      <div className="tooltip" data-tip="Deletar Transação">
        <button
          type="button"
          className="flex items-center justify-center rounded-md btn-sm btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
          onClick={() => {
            closeModal("updateTransaction");
            deleteTransaction
              .mutateAsync({ id: itemId })
              .catch((err) => console.log("delete err", err));
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
