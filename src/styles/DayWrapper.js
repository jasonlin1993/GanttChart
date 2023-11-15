import styled from "styled-components";

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column; // 让星期标签显示在日期上方
  flex: 1; // 让所有容器具有相同的灵活性
  border-right: 1px solid #ddd; // 在每个日期之间添加分割线
  background-color: ${(props) => (props.$isWeekend ? "#f0f0f0" : "none")}; // 周末使用浅灰色背景
`;

export default DayWrapper;
