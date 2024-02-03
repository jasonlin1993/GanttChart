import React, { useEffect } from "react";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";
import { GlobalStyle } from "@/styles/Global";
import { ButtonStyled, FeatureButtonStyled } from "@/styles/Button.styled";
import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import FeatureBox from "@/components/FeatureBox";
import useAuth from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faFilePdf, faFolder, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GanttChartPage = () => {
  useAuth();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(() => {
      {
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
        <FeatureButtonStyled>
          <ButtonStyled>
            <FontAwesomeIcon icon={faFloppyDisk} style={{ margin: "0px 10px 0px 0px" }} />
            檔案儲存
          </ButtonStyled>
          <ButtonStyled>
            <FontAwesomeIcon icon={faFolder} style={{ margin: "0px 10px 0px 0px" }} />
            歷史紀錄
          </ButtonStyled>
          <ButtonStyled>
            <FontAwesomeIcon icon={faFilePdf} style={{ margin: "0px 10px 0px 0px" }} />
            輸出檔案
          </ButtonStyled>
          <ButtonStyled onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} style={{ margin: "0px 10px 0px 0px" }} />
            登出
          </ButtonStyled>
        </FeatureButtonStyled>
      </Header>
      {/* <FeatureBox /> */}
      <Calendar />
      <ToastContainer />
    </>
  );
};

export default GanttChartPage;
