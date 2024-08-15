import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListSlice";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: { List: ListReducer, CartList: CartSlice },
});

export default Store;
