import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

const shouldForwardProp = (prop: string) => prop !== "showCart";

export const Container = styled.aside.withConfig({
  shouldForwardProp,
})<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? 0 : "-350px")};

  width: 350px;
  height: 100vh;
  background-color: white;

  padding: 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.25);

  transition: right 2s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItemPriceContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  flex: 1;
`;

export const CartProductItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CartProductItemTitle = styled.strong``;

export const CartTotal = styled.strong``;

export const CartRemoveProductItemButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 20px;
  background-color: red;
  color: white;
  width: fit-content;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;
