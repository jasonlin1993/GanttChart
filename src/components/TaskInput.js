import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTaskName } from "../redux/action/taskAction";
import { StyledTaskInputContainer, StyledInput, StyledDeleteButton } from "../styles/TaskInput.styled";

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
    <StyledTaskInputContainer>
      <StyledInput
        value={taskName}
        onChange={handleNameChange}
        onBlur={() => {
          handleNameUpdate();
        }}
      />
      <StyledDeleteButton onClick={handleDelete}>X</StyledDeleteButton>
    </StyledTaskInputContainer>
  );
};

export default TaskInput;
