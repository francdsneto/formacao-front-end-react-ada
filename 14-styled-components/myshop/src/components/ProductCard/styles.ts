import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 6rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const RateReviewContainer = styled.div`
  display: flex;
  align-items: flex-start;
  & > svg {
    font-size: 1rem;
  }
`;

export const Review = styled.span`
  padding-left: 0.2rem;
  font-size: 0.7rem;
`;

export const Price = styled.strong``;

export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  background-color: blue;
  color: white;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;
