import React from "react";
import { useSelector } from "react-redux";
import MonthHeader from "@/styles/MonthHeader";
import DayGrid from "@/styles/DayGrid";
import DayWrapper from "@/styles/DayWrapper";
import WeekdayCell from "@/styles/WeekdayCell";
import DayCell from "@/styles/DayCell";
import TaskRow from "@/styles/TaskRow";
import TaskDayCell from "@/styles/TaskDayCell";

// Example component for the calendar
const Calendar = () => {
  const { year, month } = useSelector((state) => state.date);
  const tasks = useSelector((state) => state.tasks.tasks);
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getWeekdayLabel = (day) => {
    const date = new Date(year, month - 1, day);
    const labels = ["S", "M", "T", "W", "T", "F", "S"];
    return labels[date.getDay()];
  };
  const isWeekend = (day) => {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  return (
    <>
      <MonthHeader>{`${month} ${year}`}</MonthHeader>
      <DayGrid>
        {days.map((day, index) => (
          <DayWrapper key={index} $isWeekend={isWeekend(day)}>
            <WeekdayCell>{getWeekdayLabel(day)}</WeekdayCell>
            <DayCell>{day}</DayCell>
          </DayWrapper>
        ))}
      </DayGrid>
      {tasks.map((task, index) => (
        <TaskRow key={task.id}>
          {" "}
          {/* 使用 TaskRow 渲染任务 */}
          {days.map((_, dayIndex) => (
            <TaskDayCell key={dayIndex}>
              {" "}
              {/* 使用 TaskDayCell 渲染任务日期单元格 */}
              {/* 如果任务与某天相关联，在这里显示 */}
            </TaskDayCell>
          ))}
        </TaskRow>
      ))}
    </>
  );
};

export default Calendar;
