// src/pages/index.js
import React from "react";
import Header from "@/components/Header";
import GlobalStyle from "@/styles/Global";
import ButtonStyled from "@/styles/Button.styled";
import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div style={{ display: "flex", flexDirection: "row", margin: "30px" }}>
          <ButtonStyled>註冊</ButtonStyled>
          <ButtonStyled>登入</ButtonStyled>
        </div>
      </Header>
    </>
  );
};

export default MainPage;
