import UserBox from "@/styles/UserBox";
import UserBoxLayout from "@/styles/UserBoxLayout";
import RegisterHeader from "@/styles/RegisterHeader";
import CloseButton from "@/styles/CloseButton";
import StyledInput from "@/styles/StyledInput";
import { useRouter } from "next/router";
import { StyledText } from "@/styles/MainText";

const SubmitBox = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };
  return (
    <>
      <UserBoxLayout>
        <UserBox>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ width: "50%" }}>
              <picture>
                <img src="../../images/register.png" alt="register" style={{ width: "100%", height: "auto" }} />
              </picture>
            </div>

            {/* 右側註冊表單部分 */}
            <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
              <div>
                <RegisterHeader>
                  註冊
                  <CloseButton onClick={handleBackToHome}>x</CloseButton>
                </RegisterHeader>
                <StyledText>Email</StyledText>
                <StyledInput type="email" placeholder="Email" />
                <StyledText>Password</StyledText>
                <StyledInput type="password" placeholder="Password" />

                <StyledText>已經有帳號了? 登入</StyledText>
                <div>
                  <button style={{ marginBottom: "1rem" }}>註冊</button>
                </div>
              </div>
            </div>
          </div>
        </UserBox>
      </UserBoxLayout>
    </>
  );
};

export default SubmitBox;
