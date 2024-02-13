// styles/Global.js
import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../public/images/backgroundImage.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "微軟正黑體", sans-serif;
    font-weight:700;
  }

`;

export const GlobalBackGroundImage = createGlobalStyle`
  body {
      background-image: url(${backgroundImage.src});
      background-repeat: no-repeat;
      background-size: cover;
      width: 100vw;
      height: 100vh;
  }
`;

export const GlobalMainPageBackGroundColor = createGlobalStyle`
  body {
      height:100%;
      background: linear-gradient(#002f7a, #002F7B,#0046b8, #3381ff);
      margin:0;
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: cover;
    }
`;
