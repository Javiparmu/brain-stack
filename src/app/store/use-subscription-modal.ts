import { create } from 'zustand';

interface useSubscriptionModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSubscriptionModal = create<useSubscriptionModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
