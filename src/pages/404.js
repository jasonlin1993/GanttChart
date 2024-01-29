import { GlobalStyle, GlobalMainPageBackGroundColor } from "@/styles/Global";
import { ErrorPageSectionStyled } from "@/styles/ErrorPage.styled";
import Header from "@/components/Header";

export default function Custom404() {
  return (
    <>
      <GlobalStyle />
      <GlobalMainPageBackGroundColor />
      <Header />
      <ErrorPageSectionStyled>
        <h1>404 - 找不到此頁面</h1>
      </ErrorPageSectionStyled>
    </>
  );
}
