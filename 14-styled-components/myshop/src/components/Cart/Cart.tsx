import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { FiTrash2 } from "react-icons/fi";
import { ProductType } from "../Products/Products";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();

  const cartTotal = cart.reduce(
    (total, product) => (total += product.price),
    0
  );

  const handleRemoveCartProduct = (product: ProductType) => {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  };

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.CartProductItemPriceContainer>
              <S.CartProductItemTitle>{product.title}</S.CartProductItemTitle>$
              {product.price.toFixed(2)}
            </S.CartProductItemPriceContainer>
            <S.CartRemoveProductItemButton
              onClick={() => handleRemoveCartProduct(product)}
            >
              <FiTrash2 />
            </S.CartRemoveProductItemButton>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal>Total: ${cartTotal.toFixed(2)}</S.CartTotal>
    </S.Container>
  );
};
