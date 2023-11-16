import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { categoriesApi } from './categoriesApi';
import { productsApi } from './productsAPI';
import { reviewsApi } from './reviewsApi';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      productsApi.middleware,
      reviewsApi.middleware,
      categoriesApi.middleware,
    ),
});
