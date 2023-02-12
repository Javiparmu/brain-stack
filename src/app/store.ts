import {
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit'
import { musicAiApi } from '../features/api/apiSlice'

export const store = configureStore({
  reducer: {
    [musicAiApi.reducerPath]: musicAiApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(musicAiApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
