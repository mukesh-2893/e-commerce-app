import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: "",
    count: 0,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.count = action.payload.length;
    },
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        state.count = state.count;
      } else {
        const arr = [];
        arr.push(action.payload);
        !state.items ? (state.items = arr) : state.items.push(action.payload);
        state.count += 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.count -= 1;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { setItems, addItem, removeItem, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
