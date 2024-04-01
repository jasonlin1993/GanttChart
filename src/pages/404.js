import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";
import { ErrorPageSectionStyled } from "@/styles/ErrorPage.styled";
import Header from "@/components/Header";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Custom404() {
  return (
    <>
      <GlobalStyle />
      <GlobalBackGroundColor />
      <Header />
      <ErrorPageSectionStyled>
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          style={{ margin: " 10px 30px 10px 0px" }}
        />
        404 找不到此頁面
      </ErrorPageSectionStyled>
    </>
  );
}
