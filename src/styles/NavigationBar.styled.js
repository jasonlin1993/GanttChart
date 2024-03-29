import styled from "styled-components";

export const MobileIconWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["displayAt"].includes(prop),
})`
  display: none;

  ${({ displayAt }) =>
    displayAt &&
    `
    @media (max-width: ${displayAt}) {
      display: flex;
      justify-content: center;
      align-content: center;
      font-size:30px;
      width:50px;
      cursor:pointer;
      margin:29px 15px 25px 0px;
      
    }
  `}
`;

export const StyledNav = styled.nav``;

export const StyledUl = styled.ul`
  list-style-type: none;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const StyledLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !["showAt"].includes(prop),
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

  ${({ showAt }) =>
    showAt &&
    `
    @media (max-width: ${showAt}) {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
    }
  `}
`;

export const NavBarContainer = styled.nav.withConfig({
  shouldForwardProp: (prop) => !["NavBarAt"].includes(prop),
})`
  ${({ NavBarAt }) =>
    NavBarAt &&
    `
    @media (max-width: ${NavBarAt}) {
      display: block;
      justify-content: center;
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 90px;
      z-index: 2;
      background-color: #002f7b;
      left: 0;
      flex-direction: column;
      left: -100%;
      transition: 0.5s;
    }
  `}
`;
