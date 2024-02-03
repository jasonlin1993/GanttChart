// src/pages/index.js
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import Header from "@/components/Header";
import { MainPageButtonStyled } from "@/styles/Button.styled";
import { HeaderMemberLoginStyled } from "@/styles/Header.styled";
import { GlobalStyle, GlobalMainPageBackGroundColor } from "@/styles/Global";
import {
  MainPageSectionStyled,
  MainPageText,
  DescribeText,
  MainPageContainer,
  MainPageTextContainer,
  Title,
  SmallText,
  Hr,
} from "@/styles/MainPage.styled";

import firebase from "../lib/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user && localStorage.getItem("LogOutSuccess") === "true") {
        toast.success("登出成功", { autoClose: 1500 });
        localStorage.removeItem("LogOutSuccess");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleProjectClick = () => {
    router.push("/ganttchart");
  };

  const handleHeaderClick = isUserLoggedIn ? handleProjectClick : handleRegisterClick;
  const headerButtonText = isUserLoggedIn ? "開始新專案" : "會員登入";

  const buttonAction = isUserLoggedIn ? handleProjectClick : handleRegisterClick;
  const buttonText = isUserLoggedIn ? "開始新專案" : "點此註冊，開始您的專案";

  return (
    <>
      <GlobalStyle />
      <GlobalMainPageBackGroundColor />
      <Header>
        <HeaderMemberLoginStyled onClick={handleHeaderClick}>{headerButtonText}</HeaderMemberLoginStyled>
      </Header>
      <MainPageSectionStyled>
        <Image
          src="/images/logo.png"
          width={150}
          height={150}
          style={{ borderRadius: "50%", margin: "75px 0px" }}
          alt="Icon"
        />
        <MainPageText>Gantt Chart</MainPageText>
      </MainPageSectionStyled>
      <DescribeText>將您的工程專案視覺化</DescribeText>
      <DescribeText>用我們的線上甘特圖工具輕鬆規劃和追蹤進度</DescribeText>
      <MainPageSectionStyled>
        <MainPageButtonStyled onClick={buttonAction} $isLoggedIn={isUserLoggedIn}>
          {buttonText}
        </MainPageButtonStyled>
      </MainPageSectionStyled>
      <Hr />
      <MainPageSectionStyled>
        <MainPageContainer>
          <Image src="/images/test.gif" width={500} height={245} alt="test" />
          <MainPageTextContainer>
            <Title>動態刪除或新增任務</Title>
            <SmallText>隨時根據專案需求增加或移除任務</SmallText>
            <SmallText>動態調整保證甘特圖的即時更新</SmallText>
            <SmallText>確保計劃的靈活性與實時性</SmallText>
          </MainPageTextContainer>
        </MainPageContainer>
      </MainPageSectionStyled>
      <Hr />
      <MainPageSectionStyled>
        <MainPageContainer>
          <MainPageTextContainer>
            <Title>輸出檔案為 pdf 檔</Title>
            <SmallText>一鍵將你的甘特圖轉化為PDF格式</SmallText>
            <SmallText>這個功能使得報告溝通更加便捷</SmallText>
            <SmallText>團隊協作還是客戶匯報都輕鬆應對</SmallText>
          </MainPageTextContainer>
          <Image src="/images/test.gif" width={500} height={245} alt="test" />
        </MainPageContainer>
      </MainPageSectionStyled>
      <Hr />
      <MainPageSectionStyled>
        <MainPageContainer>
          <Image src="/images/test.gif" width={500} height={245} alt="test" />
          <MainPageTextContainer>
            <Title>Drag & Drop </Title>
            <SmallText>以直觀的拖放操作</SmallText>
            <SmallText>輕鬆安排和調整任務進度</SmallText>
            <SmallText>此功能讓計劃管理變得更加靈活</SmallText>
            <SmallText>可迅速更新專案時間表</SmallText>
          </MainPageTextContainer>
        </MainPageContainer>
      </MainPageSectionStyled>
      <Hr />
      <MainPageSectionStyled>
        <MainPageTextContainer>
          <Title>將您的項目視覺化 </Title>
          <Title>掌握每一刻的可能 </Title>
        </MainPageTextContainer>
      </MainPageSectionStyled>
      <ToastContainer />
    </>
  );
};

export default MainPage;
