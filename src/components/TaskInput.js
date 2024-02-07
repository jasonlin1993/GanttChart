import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
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
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
    setSelectedTaskId(task.id);
    setIsEditPopupVisible(true);
  };

  const handleCloseTaskInputPopup = () => {
    setIsEditPopupVisible(false);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleAddTaskDuration = () => {
    if (!selectedTaskId) {
      console.error("Error: Please enter a valid task name to update the duration for");
      return;
    }
    if (startDate && endDate) {
      console.log("Updating task duration with:", selectedTaskId, startDate, endDate); // 確認這些值是否正確
      dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
      handleCloseTaskInputPopup();
    } else {
      console.error("Error: Missing values for task duration update");
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
            任務開始時間:
            <StyledEditTaskDurationInputDate
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskDurationContainer>
            任務結束時間:
            <StyledEditTaskDurationInputDate type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskButtonContainer>
            <StyledEditTaskSaveButton onClick={handleAddTaskDuration}>儲存</StyledEditTaskSaveButton>
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
