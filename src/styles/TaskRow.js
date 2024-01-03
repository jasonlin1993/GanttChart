// styles/TaskRow.js
import styled from "styled-components";

const TaskRow = styled.div`
  display: flex;
  border-bottom: 1px solid #002f7b;
  border-left: 1px solid #002f7b;
  max-width: 100%;
  width: 1600px;
  min-height: 20px;
  padding: 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-right: 1px solid #002f7b;

    width: 1px;
  }
`;

export default TaskRow;
