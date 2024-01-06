// styles/Global.js
import { createGlobalStyle } from "styled-components";

export const GlobalBackGroundColor = createGlobalStyle`
body {
      background: linear-gradient(to right, #002F7B, #3381ff, #002F7B);
    }

`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Viga", sans-serif;
    font-weight:700;
  }

`;
