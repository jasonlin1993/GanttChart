import React from "react";
import styled from "styled-components";

// Styled component for the month header
const MonthHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 24px;
  max-width: 1700px;
`;

const DayGrid = styled.div`
  display: flex; // 使用 flex 代替 grid 來排列日期和星期標籤
  flex-wrap: nowrap; // 確保所有元素都在一行中顯示
  text-align: center;
  border-bottom: 1px solid #ddd;
  max-width: 1700px;
`;

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column; // 让星期标签显示在日期上方
  flex: 1; // 让所有容器具有相同的灵活性
  border-right: 1px solid #ddd; // 在每个日期之间添加分割线
  background-color: ${(props) => (props.isWeekend ? "#f0f0f0" : "none")}; // 周末使用浅灰色背景
`;

const WeekdayCell = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
`;

const DayCell = styled.div`
  padding: 10px 0;
`;

// Example component for the calendar
const Calendar = ({ year, month }) => {
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
    return dayOfWeek === 0 || dayOfWeek === 6; // 0 为星期日，6 为星期六
  };

  return (
    <>
      <MonthHeader>{`${month} ${year}`}</MonthHeader>
      <DayGrid>
        {days.map((day, index) => (
          <DayWrapper key={index} isWeekend={isWeekend(day)}>
            <WeekdayCell>{getWeekdayLabel(day)}</WeekdayCell>
            <DayCell>{day}</DayCell>
          </DayWrapper>
        ))}
      </DayGrid>
    </>
  );
};

export default Calendar;
