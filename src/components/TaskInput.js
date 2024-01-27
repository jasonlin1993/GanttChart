import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTaskName } from "../redux/action/taskAction";
import {
  StyledTaskInputContainer,
  StyledInput,
  StyledDeleteButton,
  StyledEditTaskInputButton,
} from "../styles/TaskInput.styled";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <StyledEditTaskInputButton>
        <FontAwesomeIcon icon={faPenToSquare} />
      </StyledEditTaskInputButton>

      <StyledDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </StyledDeleteButton>
    </StyledTaskInputContainer>
  );
};

export default TaskInput;
