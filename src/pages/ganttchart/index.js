import React, { useEffect } from "react";
import Calendar from "@/components/Calendar";
import { GlobalStyle } from "@/styles/Global";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import { ButtonStyled, LogoutButtonStyled } from "@/styles/Button.styled";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GanttChart = () => {
  useAuth();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      } else {
        if (localStorage.getItem("registrationSuccess") === "true") {
          toast.success(" 註冊成功", { autoClose: 1500 });
          localStorage.removeItem("registrationSuccess");
        }

        if (localStorage.getItem("LoginSuccess") === "true") {
          toast.success("登入成功", { autoClose: 1500 });
          localStorage.removeItem("LoginSuccess");
        }
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.setItem("LogOutSuccess", "true");
      router.push("/");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <LogoutButtonStyled>
          <ButtonStyled onClick={handleLogout}>登出</ButtonStyled>
        </LogoutButtonStyled>
      </Header>
      <FeatureBox />
      <Calendar />
      <ToastContainer />
    </>
  );
};

export default GanttChart;
