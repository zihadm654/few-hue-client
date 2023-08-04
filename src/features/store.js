import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../api";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
