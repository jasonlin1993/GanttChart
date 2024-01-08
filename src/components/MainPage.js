// src/pages/index.js
import React from "react";
import Header from "@/components/Header";
import { GlobalStyle, GlobalMainPageBackGroundColor } from "@/styles/Global";
import { ButtonStyled, MainPageButtonStyled } from "@/styles/Button.styled";
import { useRouter } from "next/router";
import Image from "next/image";
import { MainPageSectionStyled, MainPageText, DescribeText } from "@/styles/MainPage.styled";

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
      <GlobalMainPageBackGroundColor />
      <Header>
        <div style={{ display: "flex", flexDirection: "row", margin: "30px" }}>
          <ButtonStyled onClick={handleSigninClick}>登入</ButtonStyled>
        </div>
      </Header>
      <MainPageSectionStyled>
        <Image src="/images/logo.png" width={300} height={300} alt="Icon" />
        <MainPageText>Gantt Chart</MainPageText>
      </MainPageSectionStyled>
      <DescribeText>將您的工程專案視覺化，用我們的線上甘特圖工具輕鬆規劃和追蹤進度</DescribeText>
      <MainPageSectionStyled>
        <MainPageButtonStyled onClick={handleSignupClick}>點此註冊，開始您的專案</MainPageButtonStyled>
      </MainPageSectionStyled>
    </>
  );
};

export default MainPage;
