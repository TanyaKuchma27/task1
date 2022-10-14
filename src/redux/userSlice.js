import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/users',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    fetchUser: builder.query({
      query: () => '/',
      providesTags: ['User'],
    }),
  }),
});

export const { useFetchUserQuery } = userApi;