import styled from "styled-components";

export const MainPageSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;
`;

export const MainPageText = styled.div`
  color: white;
  font-size: 80px;
  font-weight: 700;
  margin: 120px 50px;
  @media (max-width: 1100px) {
    font-size: 60px;
  }
`;

export const DescribeText = styled.div`
  display: flex;
  color: white;
  font-size: 35px;
  font-weight: 700;

  justify-content: center;
  align-content: center;
  @media (max-width: 1100px) {
    font-size: 25px;
  }
`;
