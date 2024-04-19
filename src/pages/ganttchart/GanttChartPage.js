import React, { useEffect, useState, useRef } from "react";
import firebase from "../../lib/firebase";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from "@/styles/Global";
import { setTasks, setTasksModified } from "../../redux/action/taskAction";
import { setDate } from "../../redux/action/dateAction";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledLink,
  MobileIconWrapper,
  NavBarContainer,
  StyledFontAwesomeIcon,
} from "@/styles/NavigationBar.styled";
import {
  StyledSaveDataToFireStorePopUp,
  StyledContent,
  StyledTextContainer,
  StyledButtonContainer,
  StyledCancelButton,
  StyledSaveTaskNameContainer,
  StyledSaveButton,
  StyledTaskNameInputDate,
  StyledErrorMessage,
} from "@/styles/SaveDataToFirestorePopup.styled";
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
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GanttChartPage = () => {
  useAuth();
  const dispatch = useDispatch();
  const isTasksModified = useSelector((state) => state.tasks.isTasksModified);
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const dialogRef = useRef(null);
  const [projectName, setProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const tasks = useSelector((state) => state.tasks.tasks);
  const date = useSelector((state) => state.date);
  const handleHistoryPage = () => {
    router.push("/history");
  };
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  const [
    isSaveDataToFireStorePopupVisible,
    setIsSaveDataToFireStorePopupVisible,
  ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const userId = firebase.auth().currentUser?.uid;
      if (!userId) {
        console.error("會員未登入");
        return;
      }

      const projectId = router.query.projectId || "defaultProjectName";

      try {
        const projectRef = db
          .collection("users")
          .doc(userId)
          .collection("projects")
          .doc(projectId);
        const doc = await projectRef.get();
        if (doc.exists) {
          const data = doc.data();
          dispatch(setTasks(data.tasks));
          dispatch(setDate(data.date));
          dispatch(setTasksModified(false));
        }
      } catch (error) {
        console.error("資料庫連結失敗:", error);
      }
    };

    fetchData();
  }, [dispatch, router.query.projectId]);

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

  const handleClosePopup = () => {
    setIsSaveDataToFireStorePopupVisible(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleSaveButton = async () => {
    if (!projectName) {
      setErrorMessage("專案名稱不可空白");

      return;
    }
    await saveDataToFirestore();
    handleClosePopup();
    setProjectName("");
    setErrorMessage("");
  };

  const saveDataToFirestore = async () => {
    const db = firebase.firestore();
    const userId = firebase.auth().currentUser?.uid;
    if (!userId) {
      console.error("用戶未登入");
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

    const projectNameToSave = projectName || "defaultProjectName";
    const currentDate = new Date();
    const saveTime = currentDate.toISOString().split("T")[0];

    try {
      await db
        .collection("users")
        .doc(userId)
        .collection("projects")
        .doc(projectNameToSave)
        .set(
          {
            name: projectNameToSave,
            saveTime: saveTime,
            tasks: cleanedTasks,
            date: cleanedDate,
          },
          { merge: true }
        );
      console.log("已成功儲存到 FireStore");
      dispatch(setTasksModified(false));
    } catch (error) {
      console.error("存檔失敗:", error);
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

  const exportPDF = () => {
    const input = document.getElementById("pdf-container");
    const originalStyle = input.style.cssText;
    // 擴展元素以顯示所有內容
    input.style.width = "auto";
    input.style.minWidth = "2240px";
    input.style.overflow = "visible";
    input.style.height = "auto";

    html2canvas(input, {
      scale: 1.5,
      useCORS: true,
      onclone: (clonedDocument) => {
        const clonedContainer = clonedDocument.getElementById("pdf-container");
        clonedContainer.style.cssText = input.style.cssText;

        const styledFontAwesomeIcons = clonedContainer.querySelectorAll("svg");
        styledFontAwesomeIcons.forEach((icon) => {
          icon.style.visibility = "hidden";
        });
      },
    }).then((canvas) => {
      input.style.cssText = originalStyle;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const pdfWidth = 297;
      const pdfHeight = 210;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      pdf.save("工程甘特圖.pdf");
    });
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

  useEffect(() => {
    if (isSaveDataToFireStorePopupVisible && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isSaveDataToFireStorePopupVisible]);

  const handleSaveDataToFireStorePopup = () => {
    setIsSaveDataToFireStorePopupVisible(true);
  };

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
                <StyledLink
                  showAt="1200px"
                  onClick={handleSaveDataToFireStorePopup}
                >
                  <StyledFontAwesomeIcon icon={faShareFromSquare} />
                  另存新檔
                </StyledLink>
                <StyledLink
                  showAt="1200px"
                  style={{ color: isTasksModified ? "red" : "white" }}
                  onClick={saveDataToFirestore}
                >
                  <StyledFontAwesomeIcon
                    icon={isTasksModified ? faCircleExclamation : faFloppyDisk}
                  />
                  檔案儲存
                </StyledLink>
                <StyledLink showAt="1200px" onClick={handleHistoryPage}>
                  <StyledFontAwesomeIcon icon={faFolder} />
                  歷史紀錄
                </StyledLink>
                <StyledLink showAt="1200px" onClick={exportPDF}>
                  <StyledFontAwesomeIcon icon={faFilePdf} />
                  輸出檔案
                </StyledLink>
                <StyledLink onClick={handleLogout} showAt="1200px">
                  <StyledFontAwesomeIcon icon={faRightFromBracket} />
                  會員登出
                </StyledLink>
              </StyledLi>
            </NavBarContainer>
          </StyledUl>
        </StyledNav>
      </Header>
      <Calendar />
      <ToastContainer />

      {isSaveDataToFireStorePopupVisible && (
        <StyledSaveDataToFireStorePopUp ref={dialogRef}>
          <StyledContent>
            <StyledTextContainer>另存新檔</StyledTextContainer>
          </StyledContent>
          <StyledSaveTaskNameContainer>
            專案名稱:
            <StyledTaskNameInputDate
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </StyledSaveTaskNameContainer>
          <StyledButtonContainer>
            <StyledSaveButton onClick={handleSaveButton}>儲存</StyledSaveButton>
            <StyledCancelButton onClick={handleClosePopup}>
              取消
            </StyledCancelButton>
          </StyledButtonContainer>
          {errorMessage && (
            <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
          )}
        </StyledSaveDataToFireStorePopUp>
      )}
    </>
  );
};

export default GanttChartPage;
