import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { User } from '../../interfaces/users';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as {
    user: null | User;
    token: null | string;
  },
  reducers: {
    setCurrentUser: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (
  state: RootState,
): User | null => state.auth.user;
