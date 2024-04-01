import React, { useEffect, useState } from "react";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  useAuth();
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const userId = firebase.auth().currentUser?.uid;
      if (userId) {
        try {
          const doc = await db.collection("users").doc(userId).get();
          if (doc.exists) {
            const data = doc.data();
            if (data && data.ganttCharts) {
              // 假设您有 action creators 来更新任务和日期
              // 例如: setTasks(data.ganttCharts.tasks) 和 setDate(data.ganttCharts.date)
              dispatch(setTasks(data.ganttCharts.tasks)); // 该函数需您根据实际情况定义
              dispatch(setDate(data.ganttCharts.date)); // 同上
            }
          }
        } catch (error) {
          console.error("獲取數據失敗:", error);
        }
      }
    };

    fetchData();
  }, [dispatch]);
  const tasks = useSelector((state) => state.tasks.tasks);
  const date = useSelector((state) => state.date);

  const cleanObject = (obj) => {
    const result = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      if (value && typeof value === "object") {
        result[key] = cleanObject(value);
      } else if (value !== undefined) {
        result[key] = value;
      }
    });
    return result;
  };

  const cleanedTasks = tasks.map((task) => cleanObject(task));
  const cleanedDate = cleanObject(date);

  const saveDataToFirestore = async () => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser?.uid;
    if (!userId) {
      console.log("用戶未登入");
      return;
    }

    if (
      !tasks.every(
        (task) =>
          task && Object.values(task).every((value) => value !== undefined)
      )
    ) {
      console.error("任務列表中存在未定義的值");
      return;
    }

    if (!date || Object.values(date).some((value) => value === undefined)) {
      console.error("日期對象中存在未定義的值");
      return;
    }

    try {
      // 这里我们修改了路径，将数据保存在 users 集合的当前用户文档中
      await db
        .collection("users")
        .doc(userId)
        .set(
          {
            // 假设我们在用户文档中有一个名为 ganttCharts 的字段，用于存储相关数据
            ganttCharts: {
              tasks: cleanedTasks,
              date: cleanedDate,
            },
          },
          { merge: true }
        ); // 使用 merge 选项来不覆盖已有的用户数据
      console.log("數據已儲存到 Firestore");
    } catch (error) {
      console.error("儲存失敗:", error);
    }
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

  const handleHistoryPage = () => {
    router.push("/history");
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
                <StyledLink showAt="1200px" onClick={saveDataToFirestore}>
                  <FontAwesomeIcon
                    icon={faFloppyDisk}
                    style={{ margin: "0px 10px 0px 0px" }}
                  />
                  檔案儲存
                </StyledLink>
                <StyledLink showAt="1200px" onClick={handleHistoryPage}>
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
