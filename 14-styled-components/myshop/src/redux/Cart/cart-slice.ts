import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../components/Products/Products";

interface CartState {
  cart: ProductType[];
}

const initialState: CartState = {
  cart: [] as ProductType[],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload as ProductType];
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
