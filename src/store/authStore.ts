import { User, UserResponse } from '@/interfaces/users';
import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  token: string;
  setToken: (token: string) => void;
  loginUser: (email: string, password: string) => Promise<UserResponse>;
  registerUser: (user: User) => Promise<UserResponse>;
  logoutUser: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
  token: '',
  setToken: (token: string) => set(() => ({ token })),
  loginUser: async (email: string, password: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      },
    );

    const { result } = await response.json();

    if (result) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));

      set(() => ({ user: result.user, token: result.token }));
    }

    return result;
  },
  registerUser: async (user: User) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const { result } = await response.json();

    if (result != null) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));

      set(() => ({ user: result.user, token: result.token }));
    }

    return result;
  },
  logoutUser: async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    set(() => ({ user: null, token: '' }));
  },
}));
