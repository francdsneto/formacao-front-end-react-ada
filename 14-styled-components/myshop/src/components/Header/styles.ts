import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: navy;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}

// Função que decide quais props devem ser passadas para o DOM
const shouldForwardProp = (prop: string) => prop !== "isLogged";

export const AuthButton = styled.button.withConfig({
  shouldForwardProp,
})<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  padding: 0 1rem;
  height: 30px;
  background-color: ${(props) => (props.isLogged ? "red" : "green")};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0 1rem;
  height: 30px;
  background-color: violet;
  color: black;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;
