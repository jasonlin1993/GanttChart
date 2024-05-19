import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
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
  StyledDragHandleDots,
} from "../styles/TaskInput.styled";
import { faXmark, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskInput({ task, index, moveTask }) {
  const dispatch = useDispatch();
  const [taskState, setTaskState] = useState({
    selectedTaskId: "",
    startDate: "",
    endDate: "",
    taskName: task.name,
    selectedColor: null,
    errorMessage: "",
    isEditPopupVisible: false,
  });

  const { year, month } = useSelector((state) => state.date);
  const [minDate, maxDate] = useMemo(() => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const formatToDateInputValue = (date) => {
      let day = date.getData();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      month = month < 10 ? `0${month}` : month;
      day = day < 10 ? `0${day}` : day;
      return `${year}-${month}-${day}`;
    };
    return [
      formatToDateInputValue(firstDayOfMonth),
      formatToDateInputValue(lastDayOfMonth),
    ];
  }, [year, month]);

  const dialogRef = useRef(null);

  useEffect(() => {
    if (taskState.isEditPopupVisible && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current && !taskState.isEditPopupVisible) {
      dialogRef.current.close();
    }
  }, [taskState.isEditPopupVisible]);

  const handleTaskInputPopup = () => {
    setTaskState((prevState) => ({
      ...prevState,
      selectedTaskId: task.id,
      isEditPopupVisible: true,
    }));
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleNameChange = (e) => {
    setTaskState((prevState) => ({
      ...prevState,
      taskName: e.target.value,
    }));
  };

  const handleNameUpdate = () => {
    dispatch(updateTaskName(task.id, taskState.taskName));
  };

  const handleSave = () => {
    const { startDate, endDate, selectedColor } = taskState;
    if (!startDate || !endDate || !selectedColor) {
      setTaskState((prevState) => ({
        ...prevState,
        errorMessage:
          !startDate || !endDate ? "請選擇任務時間" : "請選擇任務顏色",
      }));
      return;
    }
    if (new Date(startDate) > new Date(endDate)) {
      setTaskState((prevState) => ({
        ...prevState,
        errorMessage: "任務日期錯誤",
      }));
      return;
    }
    dispatch(updateTaskDuration(taskState.selectedTaskId, startDate, endDate));
    setTaskState((prevState) => ({
      ...prevState,
      isEditPopupVisible: false,
      errorMessage: "",
    }));
  };

  const handleDragStart = useCallback(
    (e) => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", index);
    },
    [index]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const fromIndex = e.dataTransfer.getData("text/plain");
      moveTask(parseInt(fromIndex), index);
    },
    [index, moveTask]
  );

  return (
    <StyledTaskInputContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <StyledDragHandleDots />
      <StyledInput
        value={taskState.taskName}
        onChange={handleNameChange}
        onBlur={handleNameUpdate}
      />
      <StyledEditTaskInputButton onClick={handleTaskInputPopup}>
        <FontAwesomeIcon icon={faPencil} />
      </StyledEditTaskInputButton>
      <EditTaskInputPopUp
        ref={dialogRef}
        isVisible={taskState.isEditPopupVisible}
        startDate={taskState.startDate}
        setStartDate={(date) =>
          setTaskState((prevState) => ({ ...prevState, startDate: date }))
        }
        endDate={taskState.endDate}
        setEndDate={(date) =>
          setTaskState((prevState) => ({ ...prevState, endDate: date }))
        }
        minDate={minDate}
        maxDate={maxDate}
        selectedColor={taskState.selectedColor}
        handleColorSelect={(color) => {
          dispatch(updateTaskColor(taskState.selectedTaskId, color));
          setTaskState((prevState) => ({ ...prevState, selectedColor: color }));
        }}
        handleClose={() => {
          setTaskState((prevState) => ({
            ...prevState,
            isEditPopupVisible: false,
            errorMessage: "",
          }));
        }}
        handleSave={handleSave}
        errorMessage={taskState.errorMessage}
      />

      <StyledDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faXmark} />
      </StyledDeleteButton>
    </StyledTaskInputContainer>
  );
}

export default TaskInput;
