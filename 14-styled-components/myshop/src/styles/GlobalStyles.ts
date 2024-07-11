// CSS in JS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, button, input {
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: #F7F7F7;
  }

  button {
    cursor: pointer;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.2);
      transition: filter 0.3s;
    }
  }

`;
