import { Response } from '../../interfaces/response'
import { User, UserResponse } from '../../interfaces/users'
import { musicAiApi } from '../api/apiSlice'

export const userApiEndpoints = musicAiApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => '/user',
      providesTags: ['User'],
    }),
    getUserById: builder.query<User, string>({
      query: id => `/user/${id}`,
    }),
    registerUser: builder.mutation<
      UserResponse,
      Partial<User>
    >({
      query: user => ({
        url: '/user',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation<
      UserResponse,
      Partial<User>
    >({
      query: user => ({
        url: '/user/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<User, User>({
      query: user => ({
        url: `/user/${user._id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<User, number>({
      query: id => ({
        url: `/user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    validateUser: builder.mutation<Response, string>({
      query: token => ({
        url: '/user/validate',
        method: 'POST',
        body: { token },
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useValidateUserMutation,
} = userApiEndpoints
