// src/pages/index.js
import React from "react";
import Calendar from "../components/Calendar";
import ChooseMonthAndYear from "../components/ChooseMonthAndYear";
import AddTask from "@/components/AddTask";

const Home = () => {
  return (
    <>
      <Calendar />
      <hr />
      <ChooseMonthAndYear />
      <hr />
      <AddTask />
    </>
  );
};

export default Home;
