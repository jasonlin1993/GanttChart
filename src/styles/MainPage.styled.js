import styled from "styled-components";
import Image from "../../public/images/test.gif";

export const ImageContainer = styled.div`
  background-image: url(${Image.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  @media (max-width: 1200px) {
    width: 80vw;
    height: 40vw;
    margin: 0px;
  }
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0px;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin-top: 0px;
  @media (max-width: 1200px) {
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
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
  }
`;

export const MainPageColumnSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;
  color: white;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;

    margin: 0;
  }
`;

export const MainPageReverseColumnSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 40px 0px;
  color: white;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 0px;
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
  @media (max-width: 1200px) {
    margin: 0px;
    font-size: 50px;
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
  @media (max-width: 1200px) {
    font-size: 25px;
  }
`;

export const MainPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  color: white;
  width: 700px;
  margin: 20px 0px 20px 60px;
  @media (max-width: 1200px) {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
  align-items: start;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
`;

export const SmallText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  margin: 2px 0px;
  align-items: start;
  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
`;

export const Hr = styled.hr`
  display: flex;
  position: relative;
  width: 270px;
  height: 4px;
  background-color: white;
  margin: 30px 0px 30px 0px;
`;
