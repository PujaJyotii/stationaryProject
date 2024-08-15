import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartList: [] },
  reducers: {
    add(state, action) {
      let index = state.cartList.findIndex(
        (el) => el.nameI === action.payload.nameI
      );
      if (index === -1) {
        state.cartList.push(action.payload);
      } else {
        state.cartList[index] = {
          ...state.cartList[index],
          amount: action.payload.amount,
        };
      }
    },
    get(state, action) {
      state.cartList = action.payload;
    },
  },
});

export const cartAction = CartSlice.actions;
export default CartSlice.reducer;
