// src/pages/_app.js
import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import store from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>GanttChart 線上甘特圖工具</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
