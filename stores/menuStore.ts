import {create} from "zustand";

interface MenuStore {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({isOpen: !state.isOpen})),
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}));
