// src/pages/index.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import firebase from "../lib/firebase";
import { useRouter } from "next/router";
import { MainPageButtonStyled } from "@/styles/Button.styled";
import {
  StyledUl,
  StyledLi,
  StyledLink,
  StyledNav,
  NavBarContainer,
  MobileIconWrapper,
} from "@/styles/NavigationBar.styled";
import {
  Hr,
  Title,
  SmallText,
  MainPageText,
  DescribeText,
  MainPageContainer,
  TaskColorContainer,
  TaskImageContainer,
  ExportToPdfContainer,
  CenteredFlexContainer,
  DragAndDropContainer,
  MainPageSectionStyled,
  MainPageTextContainer,
  MainPageColumnSectionStyled,
  MainPageReverseColumnSectionStyled,
} from "@/styles/MainPage.styled";
import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleProjectClick = () => {
    router.push("/ganttchart");
  };

  const handleHeaderClick = isUserLoggedIn
    ? handleProjectClick
    : handleRegisterClick;
  const headerButtonText = isUserLoggedIn ? "開始新專案" : "會員登入";
  const buttonAction = isUserLoggedIn
    ? handleProjectClick
    : handleRegisterClick;
  const buttonText = isUserLoggedIn ? "開始新專案" : "點此註冊";
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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

  return (
    <>
      <GlobalStyle />
      <GlobalBackGroundColor />
      <Header>
        <StyledNav>
          <StyledUl>
            <StyledLi>
              <MobileIconWrapper onClick={toggleSidebar} displayAt="510px">
                <FontAwesomeIcon icon={faBars} />
              </MobileIconWrapper>
            </StyledLi>
            <NavBarContainer
              style={{ left: isSidebarVisible ? "0" : "-100%" }}
              NavBarAt="510px"
            >
              <StyledLi>
                <StyledLink onClick={handleHeaderClick} showAt="510px">
                  {headerButtonText}
                </StyledLink>
              </StyledLi>
            </NavBarContainer>
          </StyledUl>
        </StyledNav>
      </Header>
      <MainPageContainer>
        <MainPageColumnSectionStyled>
          <CenteredFlexContainer>
            <Image
              src="/images/logo.png"
              style={{
                display: "flex",
                borderRadius: "50%",
                margin: "75px 0px",
              }}
              width={150}
              height={150}
              alt="Icon"
            />
          </CenteredFlexContainer>
          <MainPageText>Gantt Chart</MainPageText>
        </MainPageColumnSectionStyled>
        <DescribeText>將您的工程專案視覺化</DescribeText>
        <DescribeText>線上甘特圖工具輕鬆規劃進度</DescribeText>
        <MainPageSectionStyled>
          <MainPageButtonStyled
            onClick={buttonAction}
            $isLoggedIn={isUserLoggedIn}
          >
            {buttonText}
          </MainPageButtonStyled>
        </MainPageSectionStyled>
        <MainPageColumnSectionStyled>
          <DragAndDropContainer />
          <MainPageTextContainer>
            <Title>Drag & Drop</Title>
            <SmallText>直觀的拖放操作管理任務時間</SmallText>
            <SmallText>調整任務排列實現靈活專案規劃</SmallText>
            <SmallText>專案進度更加直觀操作更加便捷</SmallText>
          </MainPageTextContainer>
        </MainPageColumnSectionStyled>
        <Hr />
        <MainPageReverseColumnSectionStyled>
          <MainPageTextContainer>
            <Title>動態刪除或新增任務</Title>
            <SmallText>隨時根據專案需求增加或移除任務</SmallText>
            <SmallText>動態調整保證甘特圖的即時更新</SmallText>
            <SmallText>確保計劃的靈活性與實時性</SmallText>
          </MainPageTextContainer>
          <TaskImageContainer />
        </MainPageReverseColumnSectionStyled>
        <Hr />
        <MainPageColumnSectionStyled>
          <ExportToPdfContainer />
          <MainPageTextContainer>
            <Title>輸出檔案為 PDF 檔</Title>
            <SmallText>一鍵將你的甘特圖轉化為 PDF 格式</SmallText>
            <SmallText>這個功能使得報告溝通更加便捷</SmallText>
            <SmallText>團隊協作還是客戶匯報都輕鬆應對</SmallText>
          </MainPageTextContainer>
        </MainPageColumnSectionStyled>
        <Hr />
        <MainPageReverseColumnSectionStyled>
          <MainPageTextContainer>
            <Title>任務顏色選擇 </Title>
            <SmallText>自訂任務顏色，使每一項目一目了然</SmallText>
            <SmallText>透過顏色輕鬆區分不同的階段任務</SmallText>
            <SmallText>增強專案的視覺效果和易讀性</SmallText>
          </MainPageTextContainer>
          <TaskColorContainer />
        </MainPageReverseColumnSectionStyled>
        <Hr />
        <MainPageColumnSectionStyled>
          <Title>將您的項目視覺化，</Title>
          <Title>掌握每一刻的可能性 </Title>
        </MainPageColumnSectionStyled>
      </MainPageContainer>
      <ToastContainer />
    </>
  );
};

export default MainPage;
