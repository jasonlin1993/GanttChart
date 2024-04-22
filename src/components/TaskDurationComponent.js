import React from "react";
import { StyledTaskDurationComponent } from "@/styles/TaskDurationComponent.styled";

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
      <StyledTaskDurationComponent
        $widthPercentage={widthPercentage}
        $leftPercentage={leftPercentage}
        $backgroundColor={color}
      />
    </>
  );
};

export default TaskDurationComponent;
