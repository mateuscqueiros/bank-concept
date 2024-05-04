// https://docs.pmnd.rs/zustand/guides/initialize-state-with-props#basic-component-usage

import { create } from "zustand";
import { createSelectors } from "./utils";
import { TransactionType } from "@/features/transactions";
import { CategoryType } from "@/features/categories";

type ModalProps = {
  name: string;
  open: boolean;
  dataId?: CategoryType['id'] | TransactionType['id'] | null
};

interface ModalStoreType {
  modals: ModalProps[];
  open: (modalName: string) => void;
  close: (modalName: string) => void;
  openUpdate: (modalName: string, id: ModalProps['dataId']) => void
}

const DEFAULT_PROPS: ModalProps[] = [
  {
    name: "createTransaction",
    open: false,
  },
  {
    name: "updateTransaction",
    open: false,
    dataId: null
  },
  {
    name: "createCategory",
    open: false,
  },
  {
    name: "updateCategory",
    open: false,
    dataId: null
  },
];

export const modalStoreBase = create<ModalStoreType>()((set) => ({
  modals: DEFAULT_PROPS,
  open: (name) =>
    set((state) => {
      const other = state.modals.filter(
        (m) => m.name !== name,
      );
      return {
        ...state,
        modals: [...other, { name, open: true }],
      };
    }),
  close: (name) =>
    set((state) => {
      const other = state.modals.filter(
        (m) => m.name !== name,
      );
      return {
        ...state,
        modals: [...other, { name, open: false, dataId: null }],
      };
    }),
  openUpdate: (name, id) => set((state) => {
    const other = state.modals.filter(
      (m) => m.name !== name,
    );
    return {
      ...state,
      modals: [...other, { name, open: true, dataId: id }],
    };
  })
}));

export const useModalStore = createSelectors(modalStoreBase);
