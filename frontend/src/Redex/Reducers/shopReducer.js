import { createReducer } from "@reduxjs/toolkit";

// const intialState = {
//   shop: [],
// };

export const shopReducer = createReducer(
  {},
  {
    getAllProductRequest: (state) => {
      state.loading = true;
    },
    getAllProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getAllProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getSingleProductRequest: (state) => {
      state.loading = true;
    },
    getSingleProductSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getSingleProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    clearMessages: (state) => {
      state.message = null;
    },
  }
);
