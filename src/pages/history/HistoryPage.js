import React, { useEffect, useState } from "react";
import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";
import { useRouter } from "next/router";
import { setTasks, setDate } from "../../redux/action/taskAction";
import { useDispatch } from "react-redux";
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [memberName, setMemberName] = useState("");
  const router = useRouter();
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser?.uid;

    if (!userId) {
      console.error("用戶未登入");
      return;
    }

    const fetchUserData = async () => {
      try {
        // 同時獲取用戶信息和專案信息
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists) {
          setMemberName(userDoc.data().memberName); // 更新會員名稱
        } else {
          setMemberName("未找到會員名稱");
        }

        const projectsSnapshot = await db
          .collection("users")
          .doc(userId)
          .collection("projects")
          .get();

        const projectsData = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name, // 從文檔中讀取專案名稱
          saveTime: doc.data().saveTime, // 從文檔中讀取儲存時間
        }));

        setProjects(projectsData); // 更新專案列表
      } catch (error) {
        console.error("讀取用戶數據失敗:", error);
        setMemberName("讀取失敗");
      }
    };

    fetchUserData();
  }, []);

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
