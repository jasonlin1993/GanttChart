import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTaskName } from "../redux/action/taskAction";
import {
  StyledTaskInputContainer,
  StyledInput,
  StyledDeleteButton,
  StyledEditTaskInputButton,
  StyledEditTaskInputPopUp,
} from "../styles/TaskInput.styled";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskInput({ task }) {
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

  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isEditPopupVisible && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [isEditPopupVisible]);

  const handleTaskInputPopup = () => {
    setIsEditPopupVisible(true);
  };

  const handleCloseTaskInputPopup = () => {
    setIsEditPopupVisible(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
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
      <StyledEditTaskInputButton onClick={handleTaskInputPopup}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </StyledEditTaskInputButton>

      {isEditPopupVisible && (
        <StyledEditTaskInputPopUp ref={dialogRef}>
          測試測試
          <div onClick={handleCloseTaskInputPopup}>x</div>
        </StyledEditTaskInputPopUp>
      )}

      <StyledDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </StyledDeleteButton>
    </StyledTaskInputContainer>
  );
}

export default TaskInput;
