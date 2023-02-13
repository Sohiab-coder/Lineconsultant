import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );

      if (isItemExist) {
        state.cartItems = state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i
        );
      } else {
        state.cartItems.push(item);
      }
    },

    deleteToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.product !== action.payload
      );
    },

    SaveShippingInfo: (state, action) => {
      state.shippingInfo = action.payload;
    },
  }
);
