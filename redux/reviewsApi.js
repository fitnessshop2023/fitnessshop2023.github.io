import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (build) => ({
    getCompanyReviews: build.query({
      query: () => '/comments/company',
    }),
  }),
});

export const { useGetCompanyReviewsQuery } = reviewsApi;
