import { Modal } from "@/components/elements/Modal";
import { uuid } from "@/lib/utils";
import { useModalStore } from "@/stores";
import { useCreateCategory } from "../../api";
import { CategoryFormType } from "../../types";
import { DefaultCategoryForm } from "../Form";

export function CreateCategoryModal() {
  const thisModalName = "createCategory";

  const createCategory = useCreateCategory();

  const close = useModalStore.use.close();

  const onSubmit = (values: CategoryFormType) => {
    const data = {
      id: uuid(),
      ...values,
    };
    createCategory.mutate({ data });
    close(thisModalName);
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultCategoryForm onSubmit={onSubmit} />
    </Modal>
  );
}
