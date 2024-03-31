import React, { useState } from "react";
import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,
  MobileIconWrapper,
  NavBarContainer,
} from "@/styles/NavigationBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBars,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
const HistoryPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const router = useRouter();
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleGanttChartPage = () => {
    router.push("/ganttchart");
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
  return (
    <>
      <GlobalStyle />
      <GlobalBackGroundColor />
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
                <StyledLink showAt="1200px" onClick={handleGanttChartPage}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  甘特圖繪製
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
    </>
  );
};

export default HistoryPage;
