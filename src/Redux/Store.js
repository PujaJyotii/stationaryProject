import { configureStore } from "@reduxjs/toolkit";
import ListReducer from "./ListSlice";

const Store = configureStore({
  reducer: { List: ListReducer },
});

export default Store;
