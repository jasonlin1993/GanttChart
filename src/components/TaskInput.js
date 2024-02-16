import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTaskDuration,
  updateTaskColor,
} from "../redux/action/taskAction";
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
  StyledEditTaskDurationColorPickContainer,
  StyledEditTaskDurationColorBlock,
} from "../styles/TaskInput.styled";
import {
  faXmark,
  faPencil,
  faCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TaskInput({ task }) {
  const dispatch = useDispatch();
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [taskName, setTaskName] = useState(task.name);
  const { year, month } = useSelector((state) => state.date); // 從 Redux 獲取當前年份和月份
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleNameUpdate = () => {
    dispatch(updateTaskName(task.id, taskName));
  };

  const handleColorSelect = (color) => {
    // 假设 selectedTaskId 是当前任务的 ID
    dispatch(updateTaskColor(selectedTaskId, color));
    setSelectedColor(color); // 更新本地状态以显示选中的颜色
  };

  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);

  const dialogRef = useRef(null);

  useEffect(() => {
    const firstDayOfMonth = new Date(year, month - 1, 1)
      .toISOString()
      .split("T")[0];
    const lastDayOfMonth = new Date(year, month, 0).toISOString().split("T")[0];

    setMinDate(firstDayOfMonth);
    setMaxDate(lastDayOfMonth);
  }, [year, month]);

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
      console.error(
        "Error: Please enter a valid task name to update the duration for"
      );
      return;
    }
    if (startDate && endDate) {
      console.log(
        "Updating task duration with:",
        selectedTaskId,
        startDate,
        endDate
      );
      dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
      handleCloseTaskInputPopup();
    } else {
      console.error("Error: Missing values for task duration update");
    }
  };

  const ColorBlock = ({ color, isSelected, onClick, ...props }) => {
    const [showCircleIcon, setShowCircleIcon] = useState(false);

    return (
      <StyledEditTaskDurationColorBlock
        color={color}
        onClick={onClick}
        onMouseEnter={() => setShowCircleIcon(true)}
        onMouseLeave={() => setShowCircleIcon(false)}
        {...props}
      >
        {isSelected ? (
          <FontAwesomeIcon icon={faCheck} fontSize="1rem" color="black" />
        ) : (
          showCircleIcon && (
            <FontAwesomeIcon icon={faCircle} fontSize="0.5rem" color="white" />
          )
        )}
      </StyledEditTaskDurationColorBlock>
    );
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
        <FontAwesomeIcon icon={faPencil} />
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
              min={minDate}
              max={maxDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskDurationContainer>
            任務結束時間:
            <StyledEditTaskDurationInputDate
              type="date"
              value={endDate}
              min={minDate}
              max={maxDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </StyledEditTaskDurationContainer>
          <StyledEditTaskDurationContainer>
            任務顏色選擇:
            <StyledEditTaskDurationColorPickContainer>
              <ColorBlock
                width="34px"
                color="yellow"
                hoverColor="#e0e000"
                borderRadius="5px 0 0 5px"
                onClick={() => handleColorSelect("yellow")}
                isSelected={selectedColor === "yellow"}
              />
              <ColorBlock
                color="blue"
                hoverColor="#0000e0"
                onClick={() => handleColorSelect("blue")}
                isSelected={selectedColor === "blue"}
              />
              <ColorBlock
                color="green"
                hoverColor="#00e000"
                onClick={() => handleColorSelect("green")}
                isSelected={selectedColor === "green"}
              />
              <ColorBlock
                color="gray"
                hoverColor="#707070"
                onClick={() => handleColorSelect("gray")}
                isSelected={selectedColor === "gray"}
              />
              <ColorBlock
                width="33px"
                color="red"
                hoverColor="#e00000"
                borderRadius="0 5px 5px 0"
                onClick={() => handleColorSelect("red")}
                isSelected={selectedColor === "red"}
              />
            </StyledEditTaskDurationColorPickContainer>
          </StyledEditTaskDurationContainer>
          <StyledEditTaskButtonContainer>
            <StyledEditTaskSaveButton onClick={handleAddTaskDuration}>
              儲存
            </StyledEditTaskSaveButton>
            <StyledEditTaskCancelButton onClick={handleCloseTaskInputPopup}>
              取消
            </StyledEditTaskCancelButton>
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
