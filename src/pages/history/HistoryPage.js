import React, { useState } from "react";
import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";
import { useRouter } from "next/router";
import { setTasks, setDate } from "../../redux/action/taskAction";
import { useDispatch } from "react-redux";
import useAuth from "@/hooks/useAuth";
import useFirestoreData from "@/hooks/useFirestoreData";
import Header from "@/components/Header";
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,
  MobileIconWrapper,
  NavBarContainer,
} from "@/styles/NavigationBar.styled";
import {
  HistoryPageContainer,
  HistoryProject,
  HistoryPageMemberNameContainer,
  HistoryPageContainerSection,
  HistoryProjectName,
  HistoryProjectSaveTime,
} from "@/styles/HistoryPage.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faBars,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "../../lib/firebase";
const HistoryPage = () => {
  useAuth();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userId = firebase.auth().currentUser?.uid;
  const { memberName, projects } = useFirestoreData(userId);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleProjectClick = async (projectId) => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser?.uid;

    if (userId) {
      try {
        const projectRef = db
          .collection("users")
          .doc(userId)
          .collection("projects")
          .doc(projectId);
        const doc = await projectRef.get();
        if (doc.exists) {
          const projectData = doc.data();
          dispatch(setTasks(projectData.tasks)); // 更新任務列表
          dispatch(setDate(projectData.date)); // 更新日期
          router.push({
            pathname: "/ganttchart",
            query: { projectId: projectId },
          });
        }
      } catch (error) {
        console.error("無法加載專案:", error);
      }
    }
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
            <NavBarContainer isVisible={isSidebarVisible} NavBarAt="1200px">
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
      <HistoryPageContainer>
        <HistoryPageContainerSection>
          <HistoryPageMemberNameContainer>
            {memberName} 工程專案紀錄
          </HistoryPageMemberNameContainer>

          {projects.map((project) => (
            <HistoryProject
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <HistoryProjectName>專案名稱:{project.name}</HistoryProjectName>
              <HistoryProjectSaveTime>
                儲存時間:{project.saveTime}
              </HistoryProjectSaveTime>
            </HistoryProject>
          ))}
        </HistoryPageContainerSection>
      </HistoryPageContainer>
    </>
  );
};

export default HistoryPage;
