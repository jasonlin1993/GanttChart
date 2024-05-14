import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #002f7b;
  color: #eef0f2;
  max-width: 100%;
  height: 60px;
  font-size: 20px;
  justify-content: space-between;
  align-content: center;
`;

export const FlexHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 30px;
`;

export const HeaderWebTitleTextStyled = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 250px;
  font-size: 30px;

  @media (max-width: 510px) {
    font-size: 30px;
  }
`;
