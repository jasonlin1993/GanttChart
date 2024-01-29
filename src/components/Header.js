import { StyledHeader, FlexHeaderStyled, HeaderH1TextStyled } from "@/styles/Header.styled";
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
          <HeaderH1TextStyled> Gantt Chart</HeaderH1TextStyled>
        </FlexHeaderStyled>

        {children}
      </StyledHeader>
    </>
  );
}
