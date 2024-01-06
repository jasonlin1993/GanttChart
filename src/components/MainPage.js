// src/pages/index.js
import React from "react";
import Header from "@/components/Header";
import GlobalStyle from "@/styles/Global";
import ButtonStyled from "@/styles/Button.styled";

import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleSigninClick = () => {
    router.push("/signin");
  };
  return (
    <>
      <GlobalStyle />
      <Header>
        <div style={{ display: "flex", flexDirection: "row", margin: "30px" }}>
          <ButtonStyled onClick={handleSignupClick}>註冊</ButtonStyled>
          <ButtonStyled onClick={handleSigninClick}>登入</ButtonStyled>
        </div>
      </Header>
    </>
  );
};

export default MainPage;
