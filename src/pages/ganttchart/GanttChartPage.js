import React, { useEffect, useState } from "react";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";
import { GlobalStyle } from "@/styles/Global";
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,
  MobileIconWrapper,
  NavBarContainer,
} from "@/styles/NavigationBar.styled";
import Calendar from "@/components/Calendar";
import Header from "@/components/Header";
import useAuth from "@/hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faFilePdf,
  faFolder,
  faRightFromBracket,
  faShareFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GanttChartPage = () => {
  useAuth();
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.setItem("LogOutSuccess", "true");
      router.push("/");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

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

  return (
    <>
      <GlobalStyle />
      <Header>
        <StyledNav>
          <StyledUl>
            <MobileIconWrapper onClick={toggleSidebar} displayAt="1200px">
              <FontAwesomeIcon icon={faBars} />
            </MobileIconWrapper>
            <NavBarContainer
              style={{ left: isSidebarVisible ? "0" : "-100%" }}
              NavBarAt="1200px"
            >
              <StyledLi>
                <StyledLink showAt="1200px">
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  另存新檔
                </StyledLink>
                <StyledLink showAt="1200px">
                  <FontAwesomeIcon
                    icon={faFloppyDisk}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  檔案儲存
                </StyledLink>
                <StyledLink showAt="1200px">
                  <FontAwesomeIcon
                    icon={faFolder}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  歷史紀錄
                </StyledLink>
                <StyledLink showAt="1200px">
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  輸出檔案
                </StyledLink>
                <StyledLink onClick={handleLogout} showAt="1200px">
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  會員登出
                </StyledLink>
              </StyledLi>
            </NavBarContainer>
          </StyledUl>
        </StyledNav>
      </Header>
      <Calendar />
      <ToastContainer />
    </>
  );
};

export default GanttChartPage;
