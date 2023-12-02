import GlobalStyle from "@/styles/GlobalStyle";
import UserBox from "@/styles/UserBox";
import UserBoxLayout from "@/styles/UserBoxLayout";

const register = () => {
  return (
    <>
      <GlobalStyle />
      <UserBoxLayout>
        <UserBox style={{ maxWidth: "75%" }}>
          <div style={{ maxWidth: "75%" }}>
            <picture>
              <img src="../../images/civil.png" alt="login" style={{ width: "75%", color: "#f6f7fb" }} />
            </picture>
          </div>
        </UserBox>
      </UserBoxLayout>
    </>
  );
};

export default register;
