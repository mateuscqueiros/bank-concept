import { Modal } from "@/components/elements/Modal";
import { useModalStore } from "@/stores";
import { CategoryFormType } from "../../types";
import { DefaultCategoryForm } from "../Form";
import { DeleteCategory } from "../../actions";
import { useCategoryStore } from "../../stores";

export function UpdateCategoryModal() {
  const thisModalName = "updateCategory";
  const thisModalState = useModalStore.use
    .modals()
    .find((m) => m.name === thisModalName);

  const categories = useCategoryStore.use.categories();
  const updateCategory = useCategoryStore.use.update();
  const closeModal = useModalStore.use.close();

  const categoryData = categories.find((t) => t.id === thisModalState?.dataId);

  const onSubmit = (data: CategoryFormType) => {
    if (thisModalState && thisModalState.dataId !== null) {
      updateCategory({ ...data }, thisModalState?.dataId as number);
    }
    closeModal(thisModalName);
  };

  return (
    <Modal
      actions={
        thisModalState?.dataId !== null ? (
          <DeleteCategory itemId={thisModalState?.dataId as number} />
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
