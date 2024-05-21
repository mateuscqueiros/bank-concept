import { useModalStore } from "@/stores";
import { IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";
import { useCategories, useDeleteCategory } from "../api";
import { CategoryType } from "../types";

export type DeleteCategoryProps = {
  itemId: CategoryType["id"];
};

export function DeleteCategory({ itemId }: DeleteCategoryProps) {
  const closeModal = useModalStore.use.close();
  const { data: categories } = useCategories();
  const deleteCategory = useDeleteCategory();

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
            deleteCategory.mutate({ id: itemId });
          }}
        >
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
}
