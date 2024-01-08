import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isLoading: false,
  productList: [],
}

const productsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    getProductList: (state, { payload }) => {
      state.productList = payload
    },
    getProductLoading: (state, { payload }) => {
      state.isLoading = payload
    },
  }
})

const { actions, reducer } = productsSlice;

export const {
  getProductList,
  getProductLoading
} = actions;

export default reducer;