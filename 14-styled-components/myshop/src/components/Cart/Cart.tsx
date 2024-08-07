import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/Cart/cart-slice";
import { ProductType } from "../Products/Products";
import * as S from "./styles";

interface CartProps {
  showCart: boolean;
  cart: ProductType[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const cartTotal = cart.reduce(
    (total, product) => (total += product.price),
    0
  );

  // const handleRemoveCartProduct = (product: ProductType) => {
  //   dispatch(removeProduct(product));

  //   // dispatch({
  //   //   type: "cart/remove-product",
  //   //   payload: product,
  //   // });
  // };

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
              data-testid="remover"
              onClick={() => dispatch(removeProduct(product))}
            >
              <FiTrash2 />
            </S.CartRemoveProductItemButton>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartTotal data-testid="total">
        Total: ${cartTotal.toFixed(2)}
      </S.CartTotal>
    </S.Container>
  );
};
