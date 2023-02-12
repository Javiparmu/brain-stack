import { RootState } from '../../app/store'
import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
console.log(
  'process.env.REACT_APP_API_BASE_URL',
  process.env.REACT_APP_API_BASE_URL,
)
export const musicAiApi = createApi({
  reducerPath: 'musicAiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // const token = (getState() as RootState).auth.token
      // if (token) {
      //   headers.set('authorization', `Bearer ${token}`)
      // }
      return headers
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Song'],
})
