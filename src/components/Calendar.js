import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  DayCell,
  DayGrid,
  DayWrapper,
  MonthLabelStyle,
  TaskDayCell,
  TaskRow,
  WeekdayCell,
} from "@/styles/Calendar.styled";

import TaskInput from "@/components/TaskInput";

const Calendar = () => {
  const { year, month } = useSelector((state) => state.date);
  const tasks = useSelector((state) => state.tasks.tasks);

  const [days, setDays] = useState([]);

  useEffect(() => {
    // 計算當月天數，請注意 month 需要減 1

    const daysInMonth = new Date(year, month, 0).getDate();
    // 更新 days 狀態
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [year, month, tasks]); // 添加 year 和 month 到依賴陣列，當它們變化時重新執行此 effect

  const getWeekdayLabel = (day) => {
    const date = new Date(year, month - 1, day);
    const labels = ["日", "一", "二", "三", "四", "五", "六"];
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
    return isInDuration;
  };

  return (
    <>
      <MonthLabelStyle>{`${year} 年 ${month} 月 `}</MonthLabelStyle>

      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <div
          style={{
            width: "390px",
            height: "72px",
            minWidth: "205px",
            borderBottom: "1px solid #002f7b",
          }}
        />
        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
          <DayGrid>
            {days.map((day, index) => (
              <DayWrapper key={index} $isWeekend={isWeekend(day)}>
                <WeekdayCell>{getWeekdayLabel(day)}</WeekdayCell>
                <DayCell>{day}</DayCell>
              </DayWrapper>
            ))}
          </DayGrid>
        </div>
      </div>

      {tasks.map((task, index) => (
        <React.Fragment key={task.id}>
          <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
            <TaskInput task={task} />
            <TaskRow key={task.id}>
              {days.map((day, dayIndex) => {
                const isInDuration = isDayWithinTaskDuration(day, task);
                return (
                  <TaskDayCell
                    key={dayIndex}
                    $isWeekend={isWeekend(day)}
                    $hasTask={isInDuration}
                    style={{ backgroundColor: isInDuration ? "lightblue" : "none" }}
                  />
                );
              })}
            </TaskRow>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Calendar;
