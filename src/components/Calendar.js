import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MonthHeader from "@/styles/MonthHeader";
import DayGrid from "@/styles/DayGrid";
import DayWrapper from "@/styles/DayWrapper";
import WeekdayCell from "@/styles/WeekdayCell";
import DayCell from "@/styles/DayCell";
import TaskRow from "@/styles/TaskRow";
import TaskDayCell from "@/styles/TaskDayCell";
import TaskInput from "@/styles/TaskInput";
const Calendar = () => {
  const { year, month } = useSelector((state) => state.date);
  const tasks = useSelector((state) => state.tasks.tasks);
  // const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const [days, setDays] = useState([]);

  useEffect(() => {
    // 計算當月天數，請注意 month 需要減 1

    const daysInMonth = new Date(year, month, 0).getDate();
    // 更新 days 狀態
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [year, month, tasks]);

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

  const isDayWithinTaskDuration = (day, task) => {
    const currentDate = new Date(year, month - 1, day).setHours(0, 0, 0, 0);
    const start = new Date(task.startDate).setHours(0, 0, 0, 0);
    const end = new Date(task.endDate).setHours(0, 0, 0, 0);
    const isInDuration = start && end && currentDate >= start && currentDate <= end;
    console.log(`Task ${task.id}: ${isInDuration}`); // 调试输出
    return isInDuration ? "has-task" : "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "100%", width: "200px" }}>
        <div style={{ height: "53px" }} />
        <div style={{ height: "30px" }} />
        <div style={{ height: "35px" }} />
        {tasks.map((task, index) => (
          <TaskInput key={task.id} task={task} />
        ))}
      </div>
      <div
        style={{
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <MonthHeader>{`${year} 年 ${month} 月 `}</MonthHeader>
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
            {days.map((day, dayIndex) => {
              const isInDuration = isDayWithinTaskDuration(day, task);
              return (
                <TaskDayCell
                  key={dayIndex}
                  $isWeekend={isWeekend(day)}
                  $hasTask={isDayWithinTaskDuration(day, task)}
                  style={{ backgroundColor: isInDuration ? "lightblue" : "none" }}
                />
              );
            })}
          </TaskRow>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
