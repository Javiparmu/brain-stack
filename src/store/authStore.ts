import { User } from '@/interfaces/users';
import { create } from 'zustand';

type AuthStore = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: null })),
  token: '',
  setToken: (token: string) => set(() => ({ token })),
  removeToken: () => set(() => ({ token: '' })),
}));
