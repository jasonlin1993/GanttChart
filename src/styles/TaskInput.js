import React from "react";
import styled from "styled-components";

const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1px solid #ddd;
  width: 100%;
  height: 43.3px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0 0 0 15px;
  border: none;
  outline: none; // 這將移除焦點時的外框

  &:focus {
    outline: none; // 確認在點擊時沒有邊線
  }
`;

const DeleteButton = styled.button`
  // 在這裡新增刪除按鈕的樣式
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: #ef5350;
`;

const TaskInput = ({ task, onDelete }) => {
  return (
    <TaskInputContainer>
      <Input defaultValue={task.name} />
      <DeleteButton onClick={() => onDelete(task.id)}>X</DeleteButton>
    </TaskInputContainer>
  );
};

export default TaskInput;
