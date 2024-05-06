import { useCategoryStore, useModalStore } from "@/stores";
import { IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";

export type DeleteCategoryProps = {
  itemId: number;
};

export function DeleteCategory({ itemId }: DeleteCategoryProps) {
  const closeModal = useModalStore.use.close();
  const deleteCategory = useCategoryStore.use.delete();
  const categories = useCategoryStore.use.categories();

  return (
    <div>
      <div className="tooltip" data-tip="Deletar Transação">
        <button
          type="button"
          className="flex items-center justify-center rounded-md btn-sm btn-square bg-transparent border-primary border-2 hover:bg-primary hover:border-transparent text-primary hover:text-white"
          onClick={() => {
            if (categories.length <= 1) {
              toast.error(
                "Apenas uma categoria restante, não é possível deletar.",
              );
              return;
            }
            closeModal("updateCategory");
            deleteCategory(itemId);
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
