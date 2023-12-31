import React, { useEffect } from "react";
import Calendar from "@/components/Calendar";
import { GlobalStyle } from "@/styles/Global";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import ButtonStyled from "@/styles/Button.styled";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";

function GanttChart() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  function handleLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log("Logout Error:", error);
      });
  }
  return (
    <>
      <GlobalStyle />
      <Header>
        <div style={{ margin: "30px" }}>
          <ButtonStyled onClick={handleLogout}>登出</ButtonStyled>
        </div>
      </Header>
      <FeatureBox />
      <Calendar />
    </>
  );
}

export default GanttChart;
