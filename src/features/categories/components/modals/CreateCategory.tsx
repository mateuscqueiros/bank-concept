"use client";

import { Modal } from "@/components/elements/Modal";
import { useCategoryStore, useModalStore } from "@/stores";
import { CategoryFormType } from "../../types";
import { DefaultCategoryForm } from "../Form";

export function CreateCategoryModal() {
  const thisModalName = "createCategory";
  const categories = useCategoryStore.use.categories();
  const createCategory = useCategoryStore.use.create();
  const close = useModalStore.use.close();

  const nextId = Math.max(...categories.map((c) => c.id)) + 1;

  const onSubmit = (data: CategoryFormType) => {
    createCategory({
      id: nextId,
      ...data,
    });
    close(thisModalName);
  };

  return (
    <Modal title="Transação" name={thisModalName}>
      <DefaultCategoryForm onSubmit={onSubmit} />
    </Modal>
  );
}
