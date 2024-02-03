import styled from "styled-components";

export const MainPageSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;
  color: white;
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
  margin-bottom: 15px;
  justify-content: center;
  align-content: center;
  @media (max-width: 1100px) {
    font-size: 25px;
  }
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
`;

export const MainPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: white;
  width: 500px;
  margin: 20px 0px 20px 200px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  align-items: start;
`;

export const SmallText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  margin: 2px 0px;
  align-items: start;
`;

export const Hr = styled.hr`
  display: flex;
  position: relative;
  width: 270px;
  height: 4px;
  background-color: white;
  left: 43%;
  margin: 100px 0px;
`;
