import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicAiApi = createApi({
  reducerPath: 'musicAiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    prepareHeaders: (headers) => {
      if (window !== undefined) {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Song'],
});
