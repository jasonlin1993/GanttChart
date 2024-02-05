import styled from "styled-components";

export const MobileIconWrapper = styled.div`
  display: none;

  @media (max-width: ${(props) => props.hideAt || "510"}) {
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

export const StyledNav = styled.nav``;

export const StyledUl = styled.ul`
  list-style-type: none;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !["hideAt"].includes(prop),
})`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 170px;
  cursor: pointer;
  font-size: 25px;
  position: relative;
  transition: background-image 0.4s ease-out;
  &::after {
    content: "";
    position: absolute;
    background-color: #ff3c78;
    width: 0;
    height: 4px;
    left: 0;
    bottom: 0;
    transition: width 0.4s ease-out;
  }

  &:hover {
    background-image: linear-gradient(to bottom, #002f7a, #00378f);
    &::after {
      width: 100%;
    }
  }

  ${({ hideAt }) =>
    hideAt &&
    `
    @media (max-width: ${hideAt}) {
      display: none;
    }
  `}
`;
