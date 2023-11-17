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
  const daysInMonth = new Date(year, month, 0).getDate();
  console.log("Month:", daysInMonth);
  // const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const [days, setDays] = useState([]);

  useEffect(() => {
    // 計算當月天數，請注意 month 需要減 1
    const daysInMonth = new Date(year, month, 0).getDate();
    // 更新 days 狀態
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [year, month]); // 添加 year 和 month 到依賴陣列，當它們變化時重新執行此 effect

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
    <div style={{ display: "flex", Width: "100%", border: "1px solid  #ddd" }}>
      <div style={{ minWidth: "200px" }}>
        <div style={{ height: "53px" }} />
        <div style={{ height: "30px" }} />
        <div style={{ height: "35px" }} />
        {tasks.map((task, index) => (
          <TaskInput key={task.id} task={task} />
        ))}
      </div>
      <div>
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
            {days.map((day, dayIndex) => (
              <TaskDayCell key={dayIndex} $isWeekend={isWeekend(day)} $hasTask={task.days[dayIndex - 1]}></TaskDayCell>
            ))}
          </TaskRow>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
