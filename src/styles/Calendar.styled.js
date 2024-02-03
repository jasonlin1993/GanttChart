import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DayCell = styled.div`
  padding: 10px 0;
  border-top: 1px solid #002f7b;
  border-left: none;
`;

export const DayGrid = styled.div`
  display: flex;
  text-align: center;
  width: 100vw;
  min-width: 1600px;
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
  width: 100%;
  height: 71px;

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
  width: 100%;
  background-color: ${(props) => (props.$isWeekend ? "#eef0f2" : "none")};

  &:first-child {
    border-left: none;
  }
`;

export const TaskRow = styled.div`
  display: flex;
  border-bottom: 1px solid #002f7b;
  border-left: none;
  width: 100vw;
  height: 51px;
  min-width: 1600px;
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

export const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 320px;
  height: 72px;
  border-bottom: 1px solid #002f7b;
  border-right: 1px solid #002f7b;
  border-top: none;
  border-left: none;
  background-color: #eef0f2;
  box-sizing: border-box;
  color: #002f7b;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: ${(props) => (props.direction === "left" ? "3px 40px 0px 0px" : "3px 0px 0px 30px")};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: #ccc;
  }
`;
