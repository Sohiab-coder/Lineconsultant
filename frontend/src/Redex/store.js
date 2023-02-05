import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, userReducer } from "./userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
