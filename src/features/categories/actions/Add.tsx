import { IconCategoryPlus } from "@tabler/icons-react";
import { useContext } from "react";

export function AddCategory() {
  // const modalsContext = useContext(ModalsContext);
  /* const categoryModal = modalsContext.data.find(
    (modal) => modal.id === "category",
  );*/

  return (
    <div>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
        >
          {/*onClick={() => categoryModal?.open()}*/}
          <IconCategoryPlus />
        </button>
      </div>
    </div>
  );
}
