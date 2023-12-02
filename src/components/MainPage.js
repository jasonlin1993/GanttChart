import { MainText, Text } from "@/styles/MainText";
import MainLayout from "@/styles/MainLayout";
import LoginButton from "@/styles/LoginButton";
import Line from "@/styles/CutLine";
import { useRouter } from "next/router";
import FeatureBox from "@/styles/FeatureBox";
import FeatureBoxLayout from "@/styles/FeatureBoxLayout";

const MainPage = () => {
  const router = useRouter();
  function handleRegister() {
    router.push("/register");
  }
  function handleSignin() {
    router.push("/signin");
  }

  return (
    <>
      <MainLayout>
        <MainText>
          <div>Gantt Chart</div>
          <Text>線上繪製甘特圖</Text>
          <div style={{ display: "flex" }}>
            <LoginButton onClick={handleRegister}>註冊</LoginButton>
            <LoginButton onClick={handleSignin}>登入</LoginButton>
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

      <Line />
      <FeatureBoxLayout>
        <FeatureBox>
          <picture>
            <img
              src="../../icons/plus-solid.svg"
              alt="MainPage"
              style={{ maxWidth: "100%", width: "50px", height: "auto" }}
            />
          </picture>
          <Text>新增任務</Text>
        </FeatureBox>
        <FeatureBox>
          <picture>
            <img
              src="../../icons/trash-solid.svg"
              alt="MainPage"
              style={{ maxWidth: "100%", width: "50px", height: "auto" }}
            />
          </picture>
          <Text>刪除任務</Text>
        </FeatureBox>
        <FeatureBox>
          <picture>
            <img
              src="../../icons/pen-to-square-solid.svg"
              alt="MainPage"
              style={{ maxWidth: "100%", width: "50px", height: "auto" }}
            />
          </picture>
          <Text>修改任務名稱</Text>
        </FeatureBox>
        <FeatureBox>
          <picture>
            <img
              src="../../icons/calendar-regular.svg"
              alt="MainPage"
              style={{ maxWidth: "100%", width: "50px", height: "auto" }}
            />
          </picture>
          <Text>設定任務時間</Text>
        </FeatureBox>
      </FeatureBoxLayout>
    </>
  );
};

export default MainPage;
