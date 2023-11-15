import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getPromotion: build.query({
      query: () => '/products/search?keyWord=&searchLocation=best-price',
    }),
  }),
});

export const { useGetPromotionQuery } = productsApi;
