import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { productsApi } from './productsAPI';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userApi.reducerPath]: userApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, productsApi.middleware),
});
