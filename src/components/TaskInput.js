import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskDuration } from "../redux/action/taskAction";
import { removeTask, updateTaskName } from "../redux/action/taskAction";
import {
  StyledTaskInputContainer,
  StyledInput,
  StyledDeleteButton,
  StyledEditTaskInputButton,
  StyledEditTaskInputPopUp,
  StyledEditTaskContent,
  StyledEditTaskTextContainer,
  StyledEditTaskDurationContainer,
  StyledEditTaskDurationInputDate,
  StyledEditTaskButtonContainer,
  StyledEditTaskCancelButton,
  StyledEditTaskSaveButton,
} from "../styles/TaskInput.styled";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskInput({ task }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
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
          <StyledEditTaskContent>
            <StyledEditTaskTextContainer>任務內容</StyledEditTaskTextContainer>
          </StyledEditTaskContent>
          <StyledEditTaskDurationContainer>
            任務開始時間: <StyledEditTaskDurationInputDate type="date" />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskDurationContainer>
            任務結束時間: <StyledEditTaskDurationInputDate type="date" />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskButtonContainer>
            {" "}
            <StyledEditTaskSaveButton>儲存</StyledEditTaskSaveButton>
            <StyledEditTaskCancelButton onClick={handleCloseTaskInputPopup}>取消</StyledEditTaskCancelButton>
          </StyledEditTaskButtonContainer>
        </StyledEditTaskInputPopUp>
      )}

      <StyledDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </StyledDeleteButton>
    </StyledTaskInputContainer>
  );
}

export default TaskInput;
