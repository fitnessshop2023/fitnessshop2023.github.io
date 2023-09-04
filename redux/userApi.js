import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => ({
        url: '/user/registration',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation({
      query: (body) => ({
        url: '/user/auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginMutation } = userApi;
