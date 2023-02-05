import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    contactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    webFormRequest: (state) => {
      state.loading = true;
    },
    webFormSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    webFormFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    orderFormRequest: (state) => {
      state.loading = true;
    },
    orderFormSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    orderFormFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);

export const cartReducer = createReducer(
  {
    cartItem: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    subTotal: localStorage.getItem("cartPrice")
      ? JSON.parse(localStorage.getItem("cartPrice"))
      : 0,
    singleName: [],
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const itemExist = state.cartItem.find((i) => i.id === item.id);
      if (itemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.qty += 1;
          }
        });
      } else {
        state.cartItem.push(item);
      }
    },

    deleteToCart: (state, action) => {
      state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    },

    decrement: (state, action) => {
      const item = state.cartItem.find((i) => i.id === action.payload);
      if (item.qty > 1) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.qty -= 1;
          }
        });
      }
    },

    totalPrice: (state) => {
      let sum = 0;
      state.cartItem.forEach((i) => {
        sum += i.price * i.qty;
      });
      state.subTotal = sum;
    },
  }
);
