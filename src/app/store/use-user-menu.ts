import { create } from 'zustand';

interface useUserMenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useUserMenu = create<useUserMenuStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
