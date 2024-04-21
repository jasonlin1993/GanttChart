import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTaskDuration,
  updateTaskColor,
  removeTask,
  updateTaskName,
} from "../redux/action/taskAction";
import EditTaskInputPopUp from "./EditTaskInputPopUp";
import {
  StyledTaskInputContainer,
  StyledInput,
  StyledDeleteButton,
  StyledEditTaskInputButton,
} from "../styles/TaskInput.styled";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskInput({ task }) {
  const dispatch = useDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskName, setTaskName] = useState(task.name);
  const { year, month } = useSelector((state) => state.date);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const formatToDateInputValue = (date) => {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;
      return `${year}-${month}-${day}`;
    };
    setMinDate(formatToDateInputValue(firstDayOfMonth));
    setMaxDate(formatToDateInputValue(lastDayOfMonth));
  }, [year, month]);

  useEffect(() => {
    if (isEditPopupVisible && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current && !isEditPopupVisible) {
      dialogRef.current.close();
    }
  }, [isEditPopupVisible, dialogRef]);

  const handleTaskInputPopup = () => {
    setSelectedTaskId(task.id);
    setIsEditPopupVisible(true);
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleNameUpdate = () => {
    dispatch(updateTaskName(task.id, taskName));
  };

  const handleSave = () => {
    if (!startDate || !endDate || !selectedColor) {
      if (!startDate || !endDate) {
        setErrorMessage("請選擇任務時間");
      } else if (!selectedColor) {
        setErrorMessage("請選擇任務顏色");
      }
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setErrorMessage("任務日期錯誤");
      return;
    }
    dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
    setIsEditPopupVisible(false);
    setErrorMessage("");
  };

  return (
    <StyledTaskInputContainer>
      <StyledInput
        value={taskName}
        onChange={handleNameChange}
        onBlur={handleNameUpdate}
      />
      <StyledEditTaskInputButton onClick={handleTaskInputPopup}>
        <FontAwesomeIcon icon={faPencil} />
      </StyledEditTaskInputButton>

      <EditTaskInputPopUp
        ref={dialogRef}
        isVisible={isEditPopupVisible}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        minDate={minDate}
        maxDate={maxDate}
        selectedColor={selectedColor}
        handleColorSelect={(color) => {
          dispatch(updateTaskColor(selectedTaskId, color));
          setSelectedColor(color);
        }}
        handleClose={() => {
          setIsEditPopupVisible(false);
          setErrorMessage("");
        }}
        handleSave={handleSave}
        errorMessage={errorMessage}
      />

      <StyledDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </StyledDeleteButton>
    </StyledTaskInputContainer>
  );
}

export default TaskInput;
