import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTask, updateTaskName } from "../redux/action/taskAction";

const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1px solid #ddd;
  width:  100%;
  justify-content:center;
  height: 43.3px;
  box-sizing：border-box;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0 0 0 10px;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const DeleteButton = styled.button`
  // 在這裡新增刪除按鈕的樣式
  border: 0;
  background-color: transparent;
  padding: 0 5px;
  cursor: pointer;
  color: #ef5350;
`;

const TaskInput = ({ task }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState(task.name);

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleNameUpdate = () => {
    dispatch(updateTaskName(task.id, taskName));
  };

  return (
    <TaskInputContainer>
      <Input value={taskName} onChange={handleNameChange} onBlur={handleNameUpdate} />
      <DeleteButton onClick={handleDelete}>X</DeleteButton>
    </TaskInputContainer>
  );
};

export default TaskInput;
