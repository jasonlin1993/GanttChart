import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #002f7b;
  color: #eef0f2;
  max-width: 100%;
  height: 90px;
  font-size: 20px;
  justify-content: space-between;
  align-content: center;
`;

export const HeaderFeatureStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
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
      width: 100%; // 滑鼠懸停時底線滿寬度顯示
    }
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
