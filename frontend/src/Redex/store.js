import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/cartReducer";
import { profileReducer } from "./Reducers/profileReducer";
import { shopReducer } from "./Reducers/shopReducer";
import { userReducer } from "./Reducers/userReducer";
import { productReducer } from "./Reducers/productReducer";
import { orderReducer } from "./Reducers/orderReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    shop: shopReducer,
    cart: cartReducer,
    adminProduct: productReducer,
    order: orderReducer,
  },
});

export default store;
