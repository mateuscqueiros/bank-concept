"use client";

import { CreateTransactionModal } from "@/features/transactions/components/modals/CreateTransaction";
import { UpdateTransactionModal } from "@/features/transactions/components/modals/UpdateTransaction";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";

export function ModalsContainer() {
  const modalsContext = useContext(ModalsContext);
  const isAnyModalOpen = modalsContext.data.some((modal) => modal.opened);

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
          <CreateTransactionModal open={createOpen} setOpen={setCreateOpen} />
          <UpdateTransactionModal open={updateOpen} setOpen={setUpdateOpen} />
          <CategoryModal />
        </div>
        <div className="absolute top-0 w-screen h-screen bg-black opacity-80 z-40"></div>
      </div>
    </div>
  );
}
