// src/pages/index.js
import React from "react";
import GlobalStyle from "@/styles/Global";
import MainPage from "@/components/MainPage";

const Home = () => {
  return (
    <>
      <GlobalStyle>
        <MainPage />
      </GlobalStyle>
    </>
  );
};

export default Home;
