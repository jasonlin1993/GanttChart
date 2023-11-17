// styles/TaskDayCell.js
import styled from "styled-components";

const TaskDayCell = styled.div`
  flex: 1;
  border-left: 1px solid #ddd;
  height: 44px;
  background-color: ${(props) => (props.$isWeekend ? "#f0f0f0" : "none")};
  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }
`;

export default TaskDayCell;
