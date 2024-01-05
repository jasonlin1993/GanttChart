// styles/TaskDayCell.js
import styled from "styled-components";

const TaskDayCell = styled.div`
  flex: 1;
  border-right: 1px solid #002f7b;
  height: 50px;
  width: 1600px;
  background-color: ${(props) => (props.$isWeekend ? "#eef0f2" : "none")};
  &:first-child {
    border-left: none;
  }
`;

export default TaskDayCell;
