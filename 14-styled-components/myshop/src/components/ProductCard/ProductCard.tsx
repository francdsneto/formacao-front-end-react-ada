import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { ProductType } from "../Products/Products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const isProductOnCart = (product: ProductType) =>
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;

  function handleAddProductToCart() {
    dispatch(addProduct(product));

    // dispatch({
    //   type: "cart/add-product",
    //   payload: product,
    // });
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));

    // dispatch({
    //   type: "cart/remove-product",
    //   payload: product,
    // });
  }

  return (
    <S.Card key={product.id}>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.RateReviewContainer>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          <S.Review>({product.rating.rate})</S.Review>
        </S.RateReviewContainer>
        <S.Price>$ {product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCardButtonWrapper>
        {isProductOnCart(product) ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
