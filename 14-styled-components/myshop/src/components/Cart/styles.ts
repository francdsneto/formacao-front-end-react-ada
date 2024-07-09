import styled from "styled-components";
import { ShowCartProps } from "./Cart";

export const Container = styled.aside<ShowCartProps>`
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
