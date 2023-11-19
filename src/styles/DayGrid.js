import styled from "styled-components";

const DayGrid = styled.div`
  display: flex; // 使用 flex 代替 grid 來排列日期和星期標籤
  text-align: center;
  border-bottom: 1px solid #ddd;
  max-width: 100%;
  width: 1600px;
  justify-content: center;
  border-left: 1px solid #ddd;
`;

export default DayGrid;
