// styles/TaskRow.js
import styled from "styled-components";

const TaskRow = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  text-align: center;
  border-bottom: 1px solid #ddd;
  max-width: 100%;
  width: 1500px;
  min-height: 20px;
  justify-content: center;
  padding: 0;
  position: relative; 

  &:after {
    content: ""; 
    position: absolute; 
    right: 0; 
    top: 0; 
    bottom: 0; 
    border-right: 1px solid #ddd; 
    width: 1px; /
  }

  // 针对周末的样式，如果有需要
`;

export default TaskRow;
