import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0px;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: 0px;
  @media (max-width: 1100px) {
    display: flex;
    width: 90vw;
  }
`;

export const MainPageSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;
  color: white;
`;

export const MainPageFirstSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;

  color: white;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

export const MainPageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 80px;
  font-weight: 700;
  margin: 0px 30px;
  @media (max-width: 1100px) {
    margin: 0px;
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const DescribeText = styled.div`
  display: flex;
  color: white;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }
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
  margin: 10px 0px;
`;
