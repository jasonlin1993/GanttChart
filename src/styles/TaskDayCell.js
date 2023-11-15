// styles/TaskDayCell.js
import styled from "styled-components";

const TaskDayCell = styled.div`
  flex: 1;
  border-right: 1px solid #ddd; // 确保右边框存在
  border-left: 1px solid #ddd; // 确保左边框存在，这将创建分割线
  min-height: 40px; // 最小高度，确保 TaskDayCell 在没有内容时也可见

  &:first-child {
    border-left: none; // 第一个 TaskDayCell 不需要左边框
  }

  &:last-child {
    border-right: none; // 最后一个 TaskDayCell 不需要右边框
  }
`;

export default TaskDayCell;
