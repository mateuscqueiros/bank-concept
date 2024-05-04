"use client";

import { Modal } from "@/components/elements/Modal";
import { useCategoryStore } from "@/stores";
import { CategoryFormType } from "../../types";
import { DefaultCategoryForm } from "../Form";

export function CreateCategoryModal() {
  const thisModalId = "createCategory";
  const categories = useCategoryStore.use.categories();
  const createCategory = useCategoryStore.use.create();

  const nextId = Math.max(...categories.map((c) => c.id)) + 1;

  const onSubmit = (data: CategoryFormType) => {
    createCategory({
      id: nextId,
      ...data,
    });
  };

  return (
    <Modal title="Transação" name={thisModalId}>
      <DefaultCategoryForm onSubmit={onSubmit} />
    </Modal>
  );
}
