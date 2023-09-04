import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getPromotion: build.query({
      query: () => '/product/promotion', // Важно: используйте функцию для query
    }),
  }),
});

export const { useGetPromotionQuery } = productsApi;
