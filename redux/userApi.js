import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (body) => ({
        url: '/users/registration',
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
    getProfileInof: build.query({
      query: (id) => `/users/${id}`
    }),
    getProfileDeliveryAdr: build.query({
      query: (id) => `/delivery/address/users/${id}`
    }),
    getProfileComments: build.query({
      query: (id) => `/comments/users/${id}`
    })
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useGetProfileInofQuery, useGetProfileDeliveryAdrQuery, useGetProfileCommentsQuery } = userApi;
