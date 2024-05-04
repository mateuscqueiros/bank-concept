// https://docs.pmnd.rs/zustand/guides/initialize-state-with-props#basic-component-usage
import { create } from "zustand";
import { createSelectors } from "./utils";

type ModalProps = {
  name: string;
  open: boolean;
};

interface ModalStoreType {
  modals: ModalProps[];
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
}

const DEFAULT_PROPS: ModalProps[] = [
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

export const useModalStoreBase = create<ModalStoreType>()((set) => ({
  modals: DEFAULT_PROPS,
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
  toggleModal: (modalName) =>
    set((state) => {
      const thisModal = state.modals.find((modal) => modal.name === modalName);
      const otherModals = state.modals.filter(
        (modal) => modal.name !== modalName,
      );
      return {
        ...state,
        modals: [
          ...otherModals,
          { name: modalName, open: thisModal ? !thisModal?.open : false },
        ],
      };
    }),
}));

export const useModalStore = createSelectors(useModalStoreBase);
