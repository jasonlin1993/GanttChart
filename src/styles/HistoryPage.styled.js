import styled from "styled-components";

export const HistoryPageContainer = styled.div`
  display: flex;
  margin: 30px 0px;
  font-size: $font-size;
  justify-content: center;
  align-items: center;
`;

export const HistoryPageContainerSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
`;

export const HistoryPageMemberNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  font-size: 30px;
  align-items: center;
  color: white;
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;

export const HistoryProject = styled.div`
  position: relative;
  display: flex;
  margin: 10px 10px;
  flex-direction: column;
  width: calc(16.66665% - 20px);
  height: auto;
  background-color: white;
  width: 250px;
  height: 80px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 1s 0px 10px 20px 5px rgba(0, 0, 0, 1);
    transform: translateX(-5px) translateY(-5px);
  }
`;

export const HistoryProjectName = styled.div`
  display: flex;
  height: 30px;
  align-content: center;
  color: #002f7b;
  padding: 15px;
`;

export const HistoryProjectSaveTime = styled.div`
  display: flex;
  height: 30px;
  align-content: center;
  color: #002f7b;
  padding: 15px;
`;
