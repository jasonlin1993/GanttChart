import GlobalStyle from "@/styles/GlobalStyle";
import UserBox from "@/styles/UserBox";
import UserBoxLayout from "@/styles/UserBoxLayout";

const signin = () => {
  return (
    <>
      <GlobalStyle />
      <UserBoxLayout>
        <UserBox>
          <div>
            <div>
              <picture>
                <img src="../../images/signin.png" alt="signin" style={{ width: "50%", color: "#f6f7fb" }} />
              </picture>
            </div>
            <div></div>
          </div>
        </UserBox>
      </UserBoxLayout>
    </>
  );
};

export default signin;
