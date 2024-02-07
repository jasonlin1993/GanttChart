import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDate } from "../redux/action/dateAction";

import { StyledFontAwesomeIcon } from "@/styles/Calendar.styled";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
import AddTask from "./AddTask";

function Calendar() {
  const dispatch = useDispatch();
  const { year, month } = useSelector((state) => state.date);
  const tasks = useSelector((state) => state.tasks.tasks);
  const [days, setDays] = useState([]);

  useEffect(() => {
    const daysInMonth = new Date(year, month, 0).getDate();
    setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  }, [year, month, tasks]);

  const handlePrevMonth = () => {
    const newMonth = month === 1 ? 12 : month - 1;
    const newYear = month === 1 ? year - 1 : year;
    dispatch(setDate({ year: newYear, month: newMonth }));
  };

  const handleNextMonth = () => {
    const newMonth = month === 12 ? 1 : month + 1;
    const newYear = month === 12 ? year + 1 : year;
    dispatch(setDate({ year: newYear, month: newMonth }));
  };

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
      <MonthLabelStyle>
        <StyledFontAwesomeIcon icon={faCaretLeft} onClick={handlePrevMonth} direction="left" />
        {`${year} 年 ${month} 月 `}

        <StyledFontAwesomeIcon icon={faCaretRight} onClick={handleNextMonth} direction="right" />
      </MonthLabelStyle>

      <div style={{ display: "flex", flexDirection: "initial" }}>
        <div>
          <AddTask />
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <TaskInput key={task.id} task={task} />
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", overflowX: "auto" }}>
          <DayGrid>
            {days.map((day) => (
              <DayWrapper key={day} $isWeekend={isWeekend(day)}>
                <WeekdayCell>{getWeekdayLabel(day)}</WeekdayCell>
                <DayCell>{day}</DayCell>
              </DayWrapper>
            ))}
          </DayGrid>
          {tasks.map((task) => (
            <TaskRow key={task.id}>
              {days.map((day, dayIndex) => {
                const isInDuration = isDayWithinTaskDuration(day, task);
                const weekendColor = "#eef0f2";
                return (
                  <TaskDayCell
                    key={dayIndex}
                    $isWeekend={isWeekend(day)}
                    $hasTask={isInDuration}
                    style={{
                      backgroundColor: isInDuration ? "lightblue" : isWeekend(day) ? weekendColor : "white",
                    }}
                  />
                );
              })}
            </TaskRow>
          ))}
        </div>
      </div>
    </>
  );
}

export default Calendar;
