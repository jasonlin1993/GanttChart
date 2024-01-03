import React from "react";
import Calendar from "@/components/Calendar";
import AddTaskDuration from "@/components/AddTaskDuration";
import GlobalStyle from "@/styles/Global";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";

const ganttChart = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <FeatureBox />
      <Calendar />
      <AddTaskDuration />
    </>
  );
};

export default ganttChart;
