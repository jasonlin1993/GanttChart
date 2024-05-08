// src/pages/index.js
import React from "react";
import MainPage from "@/components/MainPage";
import { Analytics } from "@vercel/analytics/react";
const Home = () => {
  return (
    <Analytics>
      <MainPage />
    </Analytics>
  );
};

export default Home;
