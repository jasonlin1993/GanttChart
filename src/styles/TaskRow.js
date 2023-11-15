// styles/TaskRow.js
import styled from "styled-components";

const TaskRow = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  text-align: center;
  border-bottom: 1px solid #ddd;
  max-width: 1700px;
  min-height: 20px;
  justify-content: center;
  padding: 0;
  position: relative; // 为伪元素定位做准备
  border-left: 1px solid #ddd;

  &:after {
    content: ""; // 伪元素需要内容才能显示
    position: absolute; // 绝对定位
    right: 0; // 距离右侧 0
    top: 0; // 距离顶部 0
    bottom: 0; // 距离底部 0
    border-right: 1px solid #ddd; // 右侧边框线
    width: 1px; // 边框线的宽度
  }

  // 针对周末的样式，如果有需要
  background-color: ${(props) => (props.$isWeekend ? "#f0f0f0" : "none")};
`;

export default TaskRow;
