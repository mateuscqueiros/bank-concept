import { IconPlus } from "@tabler/icons-react";
import { useContext } from "react";

export function AddTransaction() {
  //const modalsContext = useContext(ModalsContext);

  return (
    <div>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
        >
          {/*onClick={() => modalsContext.open('transaction')}*/}
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
