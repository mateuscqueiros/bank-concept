"use client";

import {
  CreateCategoryModal,
  UpdateCategoryModal,
} from "@/features/categories/components/modals";
import {
  CreateTransactionModal,
  UpdateTransactionModal,
} from "@/features/transactions";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/stores";

export function ModalsContainer() {
  const modals = useModalStore.use.modals();
  const isAnyModalOpen = modals.some((modal) => modal.open);

  return (
    <div
      id="modals-container"
      className={cn(
        [isAnyModalOpen ? "block" : "hidden"],
        "fixed w-screen h-screen top-0 z-30",
      )}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full z-50">
          <CreateTransactionModal />
          <UpdateTransactionModal />
          <CreateCategoryModal />
          <UpdateCategoryModal />
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-40"></div>
      </div>
    </div>
  );
}
