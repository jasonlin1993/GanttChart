// src/pages/index.js
import React from "react";
import MainPage from "@/components/MainPage";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>GanttChart 線上甘特圖工具</title>
      </Head>
      <MainPage />
    </>
  );
};

export default Home;
