import React from "react";
import Calendar from "@/components/Calendar";

import GlobalStyle from "@/styles/Global";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";

import ButtonStyled from "@/styles/Button.styled";

const ganttChart = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div style={{ margin: "30px" }}>
          <ButtonStyled>登出</ButtonStyled>
        </div>
      </Header>
      <FeatureBox />
      <Calendar />
    </>
  );
};

export default ganttChart;
