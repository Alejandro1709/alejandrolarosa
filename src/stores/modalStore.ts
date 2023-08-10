import { create } from 'zustand';

type ModalStore = {
  isOpen: boolean;
  setModal: (isOpen: boolean) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  setModal: (isOpen) => set({ isOpen }),
}));
