import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
  name: "list",
  initialState: { list: [] },
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    delete(state, action) {
      state.list = state.list.filter((el) => el.nameI !== action.payload.nameI);
    },
    update(state, action) {
      let index = state.list.findIndex(
        (el) => el.nameI === action.payload.nameI
      );
      if (state.list[index].quantity > 0) {
        state.list[index] = action.payload;
      }
    },
    get(state, action) {
      state.list = action.payload;
    },
  },
});

export const listAction = ListSlice.actions;
export default ListSlice.reducer;
