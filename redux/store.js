import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './articlesSlice';
import authReducer from './authSlice';

import { articlesApi } from './articlesApi';
import { categoriesApi } from './categoriesApi';
import { productsApi } from './productsAPI';
import { reviewsApi } from './reviewsApi';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    articles: articlesReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productsApi.middleware,
      reviewsApi.middleware,
      categoriesApi.middleware,
      articlesApi.middleware,
    ),
});
