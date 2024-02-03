import { StyledHeader, FlexHeaderStyled, HeaderWebTitleTextStyled } from "@/styles/Header.styled";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header({ children }) {
  const router = useRouter();
  const handleMainPageClick = () => {
    router.push("/");
  };
  return (
    <>
      <StyledHeader>
        <FlexHeaderStyled onClick={handleMainPageClick}>
          <HeaderWebTitleTextStyled> Gantt Chart</HeaderWebTitleTextStyled>
        </FlexHeaderStyled>
        {children}
      </StyledHeader>
    </>
  );
}
