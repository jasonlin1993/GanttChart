import { MainText, Text } from "@/styles/MainText";
import MainLayout from "@/styles/MainLayout";
import LoginButton from "@/styles/LoginButton";
import Line from "@/styles/CutLine";

const MainPage = () => {
  return (
    <>
      <MainLayout>
        <MainText>
          <div>Gantt Chart</div>
          <Text>線上繪製甘特圖</Text>
          <div style={{ display: "flex" }}>
            <LoginButton>註冊</LoginButton>
            <LoginButton>登入</LoginButton>
          </div>
        </MainText>

        <picture>
          <img
            src="../../images/MainPagePic.svg"
            alt="MainPage"
            style={{ maxWidth: "100%", width: "900px", height: "auto" }}
          />
        </picture>
      </MainLayout>
      <Line></Line>
    </>
  );
};

export default MainPage;
