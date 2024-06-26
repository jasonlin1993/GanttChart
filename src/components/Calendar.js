import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../redux/action/dateAction";
import { updateTaskDates, updateTaskOrder } from "../redux/action/taskAction";
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
  FlexColumnContainer,
  FlexContainer,
} from "@/styles/Calendar.styled";
import TaskDurationComponent from "./TaskDurationComponent";
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

  const handleDateChange = (taskId, newStartDate, newEndDate) => {
    dispatch(updateTaskDates(taskId, newStartDate, newEndDate));
  };

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    dispatch(updateTaskOrder(updatedTasks));
  };

  return (
    <>
      <div id="pdf-container">
        <MonthLabelStyle>
          <StyledFontAwesomeIcon
            icon={faCaretLeft}
            onClick={handlePrevMonth}
            direction="left"
          />
          {`${year} 年 ${month} 月 `}
          <StyledFontAwesomeIcon
            icon={faCaretRight}
            onClick={handleNextMonth}
            direction="right"
          />
        </MonthLabelStyle>

        <FlexContainer>
          <div>
            <AddTask />
            {tasks.map((task, index) => (
              <React.Fragment key={task.id}>
                <TaskInput task={task} index={index} moveTask={moveTask} />
              </React.Fragment>
            ))}
          </div>
          <FlexColumnContainer>
            <DayGrid>
              {days.map((day) => (
                <DayWrapper key={day} $isWeekend={isWeekend(day)}>
                  <WeekdayCell>{getWeekdayLabel(day)}</WeekdayCell>
                  <DayCell>{day}</DayCell>
                </DayWrapper>
              ))}
            </DayGrid>
            {tasks.map((task) => {
              const daysInMonth = new Date(year, month, 0).getDate();
              const taskStartMonth = new Date(task.startDate).getMonth() + 1;
              const taskEndMonth = new Date(task.endDate).getMonth() + 1;
              const isInCurrentMonth =
                taskStartMonth === month || taskEndMonth === month;

              return (
                <TaskRow key={task.id}>
                  {isInCurrentMonth && (
                    <TaskDurationComponent
                      startDate={task.startDate}
                      endDate={task.endDate}
                      daysInMonth={daysInMonth}
                      color={task.color}
                      onDateChange={(newStartDate, newEndDate) =>
                        handleDateChange(task.id, newStartDate, newEndDate)
                      }
                    />
                  )}
                  {days.map((day, dayIndex) => (
                    <TaskDayCell key={dayIndex} $isWeekend={isWeekend(day)} />
                  ))}
                </TaskRow>
              );
            })}
          </FlexColumnContainer>
        </FlexContainer>
      </div>
    </>
  );
}

export default Calendar;
