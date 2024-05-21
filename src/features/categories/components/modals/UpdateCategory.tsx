import { Modal } from "@/components/elements/Modal";
import { useModalStore } from "@/stores";
import { DeleteCategory } from "../../actions";
import { useCategories, useUpdateCategory } from "../../api";
import { CategoryFormType, CategoryType } from "../../types";
import { DefaultCategoryForm } from "../Form";

export function UpdateCategoryModal() {
  const thisModalName = "updateCategory";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const { data: categories } = useCategories();
  const updateCategory = useUpdateCategory();
  const closeModal = useModalStore.use.close();

  const categoryData = categories.find((t) => t.id === thisModalState?.dataId);

  const onSubmit = (data: CategoryFormType) => {
    if (thisModalState && thisModalState.dataId !== null) {
      updateCategory.mutate({
        data,
        id: thisModalState.dataId as CategoryType["id"],
      });
    }
    closeModal(thisModalName);
  };

  return (
    <Modal
      actions={
        thisModalState?.dataId !== null ? (
          <DeleteCategory
            itemId={thisModalState?.dataId as CategoryType["id"]}
          />
        ) : undefined
      }
      title="Transação"
      name={thisModalName}
    >
      {categoryData && (
        <DefaultCategoryForm defaultValues={categoryData} onSubmit={onSubmit} />
      )}
    </Modal>
  );
}
