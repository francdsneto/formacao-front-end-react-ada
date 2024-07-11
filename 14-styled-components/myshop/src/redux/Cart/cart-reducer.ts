import { ProductType } from "../../components/Products/Products";

interface CartState {
  cart: ProductType[];
}

const initialState: CartState = {
  cart: [] as ProductType[],
};

interface CartAction {
  type: string;
  payload?: ProductType;
}

export function cartReducer(
  state = initialState,
  action: CartAction
): CartState {
  switch (action.type) {
    case "cart/add-product": {
      return {
        ...state,
        cart: [...state.cart, action.payload as ProductType],
      };
    }
    case "cart/remove-product": {
      const productToRemove = action.payload as ProductType;
      const cartFiltered = state.cart.filter(
        (el) => el.id !== productToRemove.id
      );
      return {
        ...state,
        cart: cartFiltered,
      };
    }
    default: {
      return state;
    }
  }
}
