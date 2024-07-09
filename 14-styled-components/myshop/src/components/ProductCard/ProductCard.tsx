import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";
import { ProductType } from "../Products/Products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductCard: React.FC<ProductType> = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <S.Card key={id}>
      <S.ProductImage src={image} alt={description} />
      <S.ProductTitle>{title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.RateReviewContainer>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          <S.Review>({rating.rate})</S.Review>
        </S.RateReviewContainer>
        <S.Price>$ {price}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCardButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao Carrinho <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCardButtonWrapper>
    </S.Card>
  );
};
