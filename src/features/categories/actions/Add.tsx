import { useModalStore } from "@/stores";
import { IconCategoryPlus } from "@tabler/icons-react";

export function AddCategory() {
  const openModal = useModalStore.use.open();

  return (
    <div>
      <div className="tooltip tooltip-left" data-tip="Adicionar categoria">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
          onClick={() => openModal("createCategory")}
        >
          <IconCategoryPlus />
        </button>
      </div>
    </div>
  );
}
