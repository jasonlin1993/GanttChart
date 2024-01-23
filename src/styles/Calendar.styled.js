import styled from "styled-components";

export const DayCell = styled.div`
  padding: 10px 0;
  border-top: 1px solid #002f7b;
  border-left: none;
`;

export const DayGrid = styled.div`
  display: flex;
  text-align: center;
  width: 1600px;
  justify-content: right;
  border: 1px solid #002f7b;
  border-top: none;
  border-left: none;
`;

export const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-right: 1px solid #002f7b;
  border-left: none;
  width: 1600px;
  background-color: ${(props) => (props.$isWeekend ? "#eef0f2" : "none")};
  color: #002f7b;

  &:last-child {
    border-right: #002f7b;
  }
`;

export const MonthLabelStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #eef0f2;
  font-weight: bold;
  padding: 15px 0;
  border-top: 1px solid #002f7b;
  border-bottom: 1px solid #002f7b;
  font-size: 25px;
  color: #002f7b;

  width: 100%;
`;

export const TaskDayCell = styled.div`
  display: flex;
  border-right: 1px solid #002f7b;

  height: 50px;
  width: 1600px;
  background-color: ${(props) => (props.$isWeekend ? "#eef0f2" : "none")};

  &:first-child {
    border-left: none;
  }
`;

export const TaskRow = styled.div`
  display: flex;
  border-bottom: 1px solid #002f7b;
  border-left: none;
  width: 1600px;
  min-height: 20px;
  padding: 0;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
  }
`;

export const WeekdayCell = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
`;

export const YellowDiv = styled.div`
  width: 320px;

  height: 72px;
  border-bottom: 1px solid #002f7b;
  border-right: 1px solid #002f7b;
  background-color: yellow;
  box-sizing: border-box;
`;
