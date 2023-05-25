import { Song, SongResponse } from '../../interfaces/songs';
import { musicAiApi } from '../api/apiSlice';

export const songApiEndpoints = musicAiApi.injectEndpoints({
  endpoints: (builder) => ({
    getSongs: builder.query<SongResponse, void>({
      query: () => '/song',
      providesTags: ['Song'],
    }),
    getSongById: builder.query<SongResponse, number>({
      query: (id) => `/song/${id}`,
    }),
    createSong: builder.mutation<
      SongResponse,
      Partial<Song>
    >({
      query: (song) => ({
        url: '/song',
        method: 'POST',
        body: song,
      }),
      invalidatesTags: ['Song'],
    }),
    updateSong: builder.mutation<SongResponse, Song>({
      query: (song) => ({
        url: `/song/${song._id}`,
        method: 'PUT',
        body: song,
      }),
      invalidatesTags: ['Song'],
    }),
    deleteSong: builder.mutation<SongResponse, string>({
      query: (id) => ({
        url: `/song/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Song'],
    }),
  }),
});

export const {
  useGetSongsQuery,
  useGetSongByIdQuery,
  useCreateSongMutation,
  useUpdateSongMutation,
  useDeleteSongMutation,
} = songApiEndpoints;
