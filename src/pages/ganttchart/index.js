import React from "react";
import Calendar from "@/components/Calendar";
import ChooseMonthAndYear from "@/components/ChooseMonthAndYear";
import AddTask from "@/components/AddTask";
import AddTaskDuration from "@/components/AddTaskDuration";
import GlobalStyle from "@/styles/Global";

const ganttChart = () => {
  return (
    <>
      <GlobalStyle>
        <Calendar />
        <hr />
        <ChooseMonthAndYear />
        <hr />
        <AddTask />
        <hr />
        <AddTaskDuration />
      </GlobalStyle>
    </>
  );
};

export default ganttChart;
