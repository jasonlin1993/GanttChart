import React from "react";
import { StyledDragTaskDurationComponent } from "@/styles/TaskDurationComponent.styled";

const TaskDurationComponent = ({ startDate, endDate, daysInMonth }) => {
  // 將傳入的開始和結束日期從字符串轉換成 Date 物件。
  const start = new Date(startDate);
  const end = new Date(endDate);
  // 計算開始和結束日期之間的持續天數。
  const durationInDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  // 從開始日期中取得日期部分，並計算它在月份中的索引（從0開始）
  const startDay = new Date(startDate).getDate();
  const startDayIndex = startDay - 1;
  // 返回一個 StyledDragTaskDurationComponent 元件，並傳遞計算出的持續天數、該月總天數、和任務開始的索引。
  return (
    <StyledDragTaskDurationComponent
      durationDays={durationInDays}
      totalDays={daysInMonth}
      startDayIndex={startDayIndex}
    />
  );
};

export default TaskDurationComponent;
