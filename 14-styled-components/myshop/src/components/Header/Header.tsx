import { useState } from "react";
import * as S from "./styles";

import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const isLogged = true;

  return (
    <>
      <S.StyledHeader>
        <S.HeaderWrapper>
          <S.HeaderTitle>MyShop.</S.HeaderTitle>
          <S.ButtonsWrapper>
            <S.AuthButton isLogged={isLogged}>
              {isLogged ? "LogOut" : "Login "}
              {isLogged ? <FiLogOut /> : <FiLogIn />}
            </S.AuthButton>

            <S.CartButton onClick={() => setShowCart(!showCart)}>
              Carrinho <FiShoppingCart />
            </S.CartButton>
          </S.ButtonsWrapper>
        </S.HeaderWrapper>
        <Cart showCart={showCart} />
      </S.StyledHeader>
    </>
  );
};
