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
  const daysInMonth = new Date(year, month - 1, 0).getDate();
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
  console.log("Tasks:", tasks);
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
          {task.days.map((_, dayIndex) => (
            <TaskDayCell key={dayIndex}>{/* 这里可以根据任务的具体情况来添加内容 */}</TaskDayCell>
          ))}
        </TaskRow>
      ))}
    </>
  );
};

export default Calendar;
