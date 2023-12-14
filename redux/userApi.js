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
    updateProfileInfo: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: body.user,
      }),
    }),
    updateProfilePassword: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/users/${id}/password`,
        method: 'PATCH',
        body: body.data,
      }),
    }),
    getProfileDeliveryAdr: build.query({
      query: (id) => `/delivery/address/users/${id}`
    }),

    updateProfileAddress: build.mutation({
      query: ({ id, ...body }) => ({
        url: `/delivery/address/users/${id}`,
        method: 'PATCH',
        body: body.data,
      }),
    }),

    getProfileComments: build.query({
      query: (id) => `/comments/users/${id}`
    }),
    getProfileOrders: build.query({
      query: (id) => `/orders/users/${id}`
    })
  }),
});

export const { useRegisterUserMutation, useLoginMutation, useGetProfileInofQuery, useGetProfileDeliveryAdrQuery, useGetProfileCommentsQuery, 
  useGetProfileOrdersQuery, useUpdateProfileInfoMutation, useUpdateProfilePasswordMutation } = userApi;
