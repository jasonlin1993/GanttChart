import { StyledHeader } from "@/styles/Header.styled";
import { Flex } from "@/styles/Flex.styled";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Flex color="#fff">
          <h1> Gantt Chart</h1>
        </Flex>
      </StyledHeader>
    </>
  );
}
