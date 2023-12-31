import { StyledHeader } from "@/styles/Header.styled";
import { Flex } from "@/styles/Flex.styled";
import Image from "next/image";

export default function Header({ children }) {
  return (
    <>
      <StyledHeader>
        <Image style={{ margin: "20px -15px 20px 20px" }} width={50} height={50} alt="Logo" src="/images/logo.png" />
        <Flex>
          <h1> Gantt Chart</h1>
        </Flex>
        {children}
      </StyledHeader>
    </>
  );
}
