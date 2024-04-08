import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledDragTaskDurationComponent,
  StyledLeftDragAndDropContainer,
  StyledCenterDragAndDropContainer,
  StyledRightDragAndDropContainer,
} from "@/styles/TaskDurationComponent.styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDurationComponent = ({
  taskId,
  startDate,
  endDate,
  daysInMonth,
  color,
}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  const widthPercentage = `${(durationInDays / daysInMonth) * 100}%`;
  const startDay = new Date(startDate).getDate();
  const startDayIndex = startDay - 1;
  // const dispatch = useDispatch();
  // const [size, setSize] = useState({
  //   width: widthPercentage,
  // });

  // const handleResize = (side) => (mouseDownEvent) => {
  //   const startWidthPercentage = parseFloat(size.width);
  //   const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

  //   function onMouseMove(mouseMoveEvent) {
  //     const deltaX =
  //       ((mouseMoveEvent.pageX - startPosition.x) / window.innerWidth) * 100;
  //     let newWidthPercentage =
  //       startWidthPercentage + (side === "right" ? deltaX : -deltaX);
  //     setSize({ width: `${newWidthPercentage}%` });
  //   }

  //   function onMouseUp() {
  //     document.removeEventListener("mousemove", onMouseMove);
  //     document.removeEventListener("mouseup", onMouseUp);
  //   }

  //   document.addEventListener("mousemove", onMouseMove);
  //   document.addEventListener("mouseup", onMouseUp, { once: true });
  // };

  return (
    <>
      <StyledDragTaskDurationComponent
        style={{ width: widthPercentage }}
        durationDays={durationInDays}
        totalDays={daysInMonth}
        startDayIndex={startDayIndex}
        backgroundColor={color}
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
