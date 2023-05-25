import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { musicAiApi } from '../redux/api/apiSlice';
import auth from '../redux/auth/authSlice';

export const store = configureStore({
  reducer: {
    [musicAiApi.reducerPath]: musicAiApi.reducer,
    auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicAiApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
setupListeners(store.dispatch);
