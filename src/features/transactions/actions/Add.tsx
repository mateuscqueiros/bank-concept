"use client";

import { useModalStore } from "@/stores";
import { IconPlus } from "@tabler/icons-react";

export function AddTransaction() {
  const openModal = useModalStore.use.open();

  return (
    <div>
      <div className="tooltip tooltip-left" data-tip="Adicionar transação">
        <button
          type="button"
          className="btn-sm bg-primary rounded-md p-1 text-white hover:bg-tertiary"
          onClick={() => openModal("createTransaction")}
        >
          <IconPlus />
        </button>
      </div>
    </div>
  );
}
