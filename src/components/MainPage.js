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
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <Image width={950} height={690} alt="MainPagePic" src="/images/MainPagePic.jpg" />
        </div>
      </div>
    </>
  );
};

export default MainPage;
