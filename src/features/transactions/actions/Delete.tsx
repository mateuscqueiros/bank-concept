import { useContext } from "react";
import { IconTrash } from "@tabler/icons-react";

export type DeleteTransactionProps = {
  itemId: string;
};

export function DeleteTransaction({ itemId }: DeleteTransactionProps) {
  // const dataContext = useContext(DataContext);
  // const modalsContext = useContext(ModalsContext);

  // const transactionModal = modalsContext.data.find((modal) => modal.id === 'transaction');

  // const transactions = dataContext.transactions;

  return (
    <div>
      <div className="tooltip" data-tip="Deletar Transação">
        <button
          type="button"
          className="btn btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
        >
          {/*onClick={() => {
            transactionModal?.close();
            transactions.delete(itemId);
          }}*/}
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
