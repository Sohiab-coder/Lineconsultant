import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  adminProduct: [],
};

export const productReducer = createReducer(initialState, {
  createrProductRequest: (state) => {
    state.loading = true;
  },
  createrProductSuccess: (state, action) => {
    state.loading = false;
    state.adminProduct = action.payload;
  },
  createrProductFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  deleteProductsRequest: (state) => {
    state.loading = true;
  },
  deleteProductsSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  deleteProductsFail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
  clearMessages: (state) => {
    state.message = null;
  },
});
