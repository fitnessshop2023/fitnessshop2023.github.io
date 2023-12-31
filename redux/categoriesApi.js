import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => 'categorys/targets',
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
