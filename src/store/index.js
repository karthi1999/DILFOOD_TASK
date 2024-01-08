'use client'

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "./slices/products.slice"

const store = configureStore({
  reducer: {
    productsState: productsReducer
  },
});

export * from './actions';
export * from './slices';

export default store;
