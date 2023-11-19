// src/pages/index.js
import React from "react";
import Calendar from "../components/Calendar";
import ChooseMonthAndYear from "../components/ChooseMonthAndYear";
import AddTask from "@/components/AddTask";
import AddTaskDuration from "@/components/AddTaskDuration";

const Home = () => {
  return (
    <>
      <Calendar />
      <hr />
      <ChooseMonthAndYear />
      <hr />
      <AddTask />
      <hr />
      <AddTaskDuration />
    </>
  );
};

export default Home;
