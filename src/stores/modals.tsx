// https://docs.pmnd.rs/zustand/guides/initialize-state-with-props#basic-component-usage

import { StoreApi, createStore } from "zustand";
import { createContext, useRef } from "react";

type ModalProps = {
  name: string;
  open: boolean;
};

interface ModalStoreType {
  modals: ModalProps[];
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
}

const createModalStore = (initProps?: { modals: ModalProps[] }) => {
  const DEFAULT_PROPS: { modals: ModalProps[] } = {
    modals: [
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
    ],
  };

  return createStore<ModalStoreType>()((set) => ({
    ...DEFAULT_PROPS,
    ...initProps,
    openModal: (modalName) =>
      set((state) => {
        const otherModals = state.modals.filter(
          (modal) => modal.name !== modalName,
        );
        return {
          ...state,
          modals: [...otherModals, { name: modalName, open: true }],
        };
      }),
    closeModal: (modalName) =>
      set((state) => {
        const otherModals = state.modals.filter(
          (modal) => modal.name !== modalName,
        );
        return {
          ...state,
          modals: [...otherModals, { name: modalName, open: false }],
        };
      }),
  }));
};

export const ModalsContext = createContext<StoreApi<ModalStoreType> | null>(
  null,
);

export function ModalsProvider({ children }: React.PropsWithChildren) {
  const store = useRef(createModalStore()).current;
  return (
    <ModalsContext.Provider value={store}>{children}</ModalsContext.Provider>
  );
}
