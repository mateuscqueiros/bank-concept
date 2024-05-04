import { create, createStore } from "zustand";
import { createContext } from "react";

type ModalStateType = {
  name: string;
  open: boolean;
};

const DEFAULT_PROPS: ModalStateType[] = [
  {
    name: "createTransaction",
    open: false,
  },
  {
    name: "updateTransaction",
    open: false,
  },
  {
    name: "createCategory",
    open: false,
  },
  {
    name: "updateCategory",
    open: false,
  },
];

type ModalsStoreType = {
  modals: ModalStateType[];
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
};

create<ModalsStoreType>((set) => ({
  modals: DEFAULT_PROPS,
  openModal: (modalName) =>
    set((state) => {
      const modalToOpen = state.modals.find(
        (modal) => modal.name === modalName,
      );
      if (modalToOpen) {
        const otherModals = state.modals.filter(
          (modal) => modal.name !== modalName,
        );
        return {
          ...state,
          modals: [...otherModals, { name: modalName, open: true }],
        };
      } else {
        console.log("Modal not found");
        return state;
      }
    }),
  closeModal: (modalName) =>
    set((state) => {
      const modalToClose = state.modals.find(
        (modal) => modal.name === modalName,
      );
      if (modalToClose) {
        const otherModals = state.modals.filter(
          (modal) => modal.name !== modalName,
        );
        return {
          ...state,
          modals: [...otherModals, { name: modalName, open: false }],
        };
      } else {
        console.log("Modal not found");
        return state;
      }
    }),
}));

export const ModalsContext = createContext<ModalsStoreType | null>(null);
