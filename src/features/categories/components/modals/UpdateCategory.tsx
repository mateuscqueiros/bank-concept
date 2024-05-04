import { Modal } from "@/components/elements/Modal";
import { useCategoryStore, useModalStore } from "@/stores";
import { CategoryFormType } from "../../types";
import { DefaultCategoryForm } from "../Form";

export function UpdateCategoryModal() {
  const thisModalId = "updateCategory";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalId);

  const categories = useCategoryStore.use.categories();
  const updateCategory = useCategoryStore.use.update();
  const closeModal = useModalStore.use.close();

  const categoryData = categories.find((t) => t.id === thisModalState?.dataId);
  console.log(categoryData);

  const onSubmit = (data: CategoryFormType) => {
    if (thisModalState && thisModalState.dataId) {
      updateCategory({ ...data }, thisModalState?.dataId as number);
    }
    closeModal("updateTransaction");
  };

  return (
    <Modal title="Transação" name="updateTransaction">
      {categoryData && (
        <DefaultCategoryForm defaultValues={categoryData} onSubmit={onSubmit} />
      )}
    </Modal>
  );
}
