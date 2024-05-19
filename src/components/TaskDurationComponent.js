import React, { useState, useEffect, useCallback } from "react";
import {
  StyledDragTaskDurationComponent,
  StyledLeftDragAndDropContainer,
  StyledCenterDragAndDropContainer,
  StyledRightDragAndDropContainer,
} from "@/styles/TaskDurationComponent.styled";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TaskDurationComponent = ({
  startDate,
  endDate,
  daysInMonth,
  color,
  onDateChange,
}) => {
  const calculateSize = (startDate, endDate, daysInMonth) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    const widthPercentage = `${(durationInDays / daysInMonth) * 100}%`;
    const startDay = new Date(startDate).getDate();
    const startDayIndex = startDay - 1;
    const leftPercentage = `${(startDayIndex / daysInMonth) * 100}%`;

    return {
      width: widthPercentage,
      left: leftPercentage,
    };
  };
  const [size, setSize] = useState(
    calculateSize(startDate, endDate, daysInMonth)
  );
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setSize(calculateSize(startDate, endDate, daysInMonth));
  }, [startDate, endDate, daysInMonth]);

  const handleResize = useCallback(
    (side) => (mouseDownEvent) => {
      const startWidthPercentage = parseFloat(size.width);
      const startLeftPercentage = parseFloat(size.left);
      const startPosition = {
        x: mouseDownEvent.pageX,
        y: mouseDownEvent.pageY,
      };

      function onMouseMove(mouseMoveEvent) {
        const deltaX =
          ((mouseMoveEvent.pageX - startPosition.x) / window.innerWidth) * 100;
        let newWidthPercentage;
        let newLeftPercentage;

        if (side === "right") {
          newWidthPercentage = startWidthPercentage + deltaX;
          setSize({ width: `${newWidthPercentage}%`, left: size.left });
        } else if (side === "left") {
          newWidthPercentage = startWidthPercentage - deltaX;
          newLeftPercentage = startLeftPercentage + deltaX;
          setSize({
            width: `${newWidthPercentage}%`,
            left: `${newLeftPercentage}%`,
          });
        }
      }

      function onMouseUp(mouseUpEvent) {
        const deltaX =
          ((mouseUpEvent.pageX - startPosition.x) / window.innerWidth) * 100;
        const daysMoved = Math.round((deltaX / 100) * daysInMonth);
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        if (side === "right") {
          const newEndDate = new Date(startDate);
          newEndDate.setDate(
            newEndDate.getDate() + durationInDays + daysMoved - 1
          );
          onDateChange(startDate, newEndDate.toISOString().split("T")[0]);
        } else if (side === "left") {
          const newStartDate = new Date(start);
          newStartDate.setDate(start.getDate() + daysMoved);
          onDateChange(newStartDate.toISOString().split("T")[0], endDate);
        }
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [size, startDate, endDate, daysInMonth, onDateChange]
  );

  return (
    <>
      <StyledDragTaskDurationComponent
        style={{ width: size.width, left: size.left }}
        $widthPercentage={size.width}
        $leftPercentage={size.left}
        $backgroundColor={color}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <StyledLeftDragAndDropContainer
          onMouseDown={handleResize("left")}
          hovered={hovered}
        >
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="lg"
            color="#eef0f2"
          />
        </StyledLeftDragAndDropContainer>
        <StyledCenterDragAndDropContainer />
        <StyledRightDragAndDropContainer
          onMouseDown={handleResize("right")}
          hovered={hovered}
        >
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
