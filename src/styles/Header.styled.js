import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #002f7b;
  color: #eef0f2;
  max-width: 100%;

  height: 90px;
  font-weight: inherit;
  font-size: 20px;

  justify-content: space-between;
  align-content: center;
`;

export const HeaderFeatureStyled = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  width: 250px;
  cursor: pointer;
  font-size: 25px;
  &::after {
    content: "";
    position: absolute;
    background-color: #ff3c78;
    width: 0;
    height: 1px;
    left: 0;
    top: 35px;
    transition: 0.4s ease-out;
  }
`;

export const FlexHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px;
`;

export const HeaderH1TextStyled = styled.h1`
  cursor: pointer;
`;
