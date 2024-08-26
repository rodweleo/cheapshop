import { CartItemProps, CartStateProps } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartStateProps = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        const cartItem: CartItemProps = {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          thumbnail: newItem.thumbnail,
          brand: newItem.brand,
        };

        state.items.push(cartItem);
      }
      state.totalQuantity++;
      state.totalAmount += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice -= existingItem!.price;
      }
      state.totalQuantity--;
      state.totalAmount -= existingItem!.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addProductToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
