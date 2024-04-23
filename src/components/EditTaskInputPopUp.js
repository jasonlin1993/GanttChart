import React, { forwardRef } from "react";
import {
  StyledEditTaskInputPopUp,
  StyledEditTaskContent,
  StyledEditTaskTextContainer,
  StyledEditTaskDurationContainer,
  StyledEditTaskDurationInputDate,
  StyledEditTaskButtonContainer,
  StyledEditTaskCancelButton,
  StyledEditTaskSaveButton,
  StyledEditTaskDurationColorPickContainer,
  StyledErrorMessage,
} from "../styles/TaskInput.styled";
import ColorBlock from "./ColorBlock";

const EditTaskInputPopUp = forwardRef(
  (
    {
      isVisible,
      startDate,
      setStartDate,
      endDate,
      setEndDate,
      minDate,
      maxDate,
      selectedColor,
      handleColorSelect,
      handleClose,
      handleSave,
      errorMessage,
    },
    ref
  ) => {
    if (!isVisible) return null;
    return (
      <StyledEditTaskInputPopUp ref={ref}>
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
              color="yellow"
              width="34px"
              $hoverColor="#E0E000"
              $borderRadius="5px 0 0 5px"
              isSelected={selectedColor === "yellow"}
              handleColorSelect={handleColorSelect}
            />
            <ColorBlock
              color="blue"
              $hoverColor="#0000CC"
              isSelected={selectedColor === "blue"}
              handleColorSelect={handleColorSelect}
            />
            <ColorBlock
              color="green"
              $hoverColor="#00E000"
              isSelected={selectedColor === "green"}
              handleColorSelect={handleColorSelect}
            />
            <ColorBlock
              color="gray"
              $hoverColor="#707070"
              isSelected={selectedColor === "gray"}
              handleColorSelect={handleColorSelect}
            />
            <ColorBlock
              color="red"
              width="33px"
              $hoverColor="#e00000"
              $borderRadius="0 5px 5px 0"
              isSelected={selectedColor === "red"}
              handleColorSelect={handleColorSelect}
            />
          </StyledEditTaskDurationColorPickContainer>
        </StyledEditTaskDurationContainer>
        <StyledEditTaskButtonContainer>
          <StyledEditTaskSaveButton onClick={handleSave}>
            儲存
          </StyledEditTaskSaveButton>
          <StyledEditTaskCancelButton onClick={handleClose}>
            取消
          </StyledEditTaskCancelButton>
        </StyledEditTaskButtonContainer>
        {errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
      </StyledEditTaskInputPopUp>
    );
  }
);

EditTaskInputPopUp.displayName = "EditTaskInputPopUp";

export default EditTaskInputPopUp;
