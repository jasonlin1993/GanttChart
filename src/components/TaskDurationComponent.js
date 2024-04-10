import React from "react";
import {
  StyledDragTaskDurationComponent,
  StyledLeftDragAndDropContainer,
  StyledCenterDragAndDropContainer,
  StyledRightDragAndDropContainer,
} from "@/styles/TaskDurationComponent.styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDurationComponent = ({ startDate, endDate, daysInMonth, color }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  const widthPercentage = `${(durationInDays / daysInMonth) * 100}%`;
  const startDay = new Date(startDate).getDate();
  const startDayIndex = startDay - 1;
  const leftPercentage = `${(startDayIndex / daysInMonth) * 100}%`;

  return (
    <>
      <StyledDragTaskDurationComponent
        $widthPercentage={widthPercentage}
        $leftPercentage={leftPercentage}
        $backgroundColor={color}
      >
        <StyledLeftDragAndDropContainer>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="lg"
            color="#eef0f2"
          />
        </StyledLeftDragAndDropContainer>
        <StyledCenterDragAndDropContainer />
        <StyledRightDragAndDropContainer>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="lg"
            color="#eef0f2"
          />
        </StyledRightDragAndDropContainer>
      </StyledDragTaskDurationComponent>
    </>
  );
};

export default TaskDurationComponent;
