// src/pages/index.js
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

import Header from "@/components/Header";
import { MainPageButtonStyled } from "@/styles/Button.styled";
import { HeaderMemberLoginStyled } from "@/styles/Header.styled";
import { GlobalStyle, GlobalMainPageBackGroundColor } from "@/styles/Global";
import { MainPageSectionStyled, MainPageText, DescribeText } from "@/styles/MainPage.styled";

import firebase from "../lib/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  useAuth();
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user && localStorage.getItem("LogOutSuccess") === "true") {
        toast.success("登出成功", { autoClose: 1500 });
        localStorage.removeItem("LogOutSuccess");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleSigninClick = () => {
    router.push("/signin");
  };

  const handleProjectClick = () => {
    router.push("/ganttchart");
  };

  const handleHeaderClick = isUserLoggedIn ? handleProjectClick : handleSigninClick;
  const headerButtonText = isUserLoggedIn ? "開始新專案" : "會員登入";

  return (
    <>
      <GlobalStyle />
      <GlobalMainPageBackGroundColor />
      <Header>
        <HeaderMemberLoginStyled onClick={handleHeaderClick}>{headerButtonText}</HeaderMemberLoginStyled>
      </Header>
      <MainPageSectionStyled>
        <Image src="/images/logo.png" width={300} height={300} alt="Icon" />
        <MainPageText>Gantt Chart</MainPageText>
      </MainPageSectionStyled>
      <DescribeText>將您的工程專案視覺化，用我們的線上甘特圖工具輕鬆規劃和追蹤進度</DescribeText>
      <MainPageSectionStyled>
        <MainPageButtonStyled onClick={handleSignupClick}>點此註冊，開始您的專案</MainPageButtonStyled>
      </MainPageSectionStyled>
      <ToastContainer />
    </>
  );
};

export default MainPage;
