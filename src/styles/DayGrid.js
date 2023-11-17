import styled from "styled-components";

const DayGrid = styled.div`
  display: flex; // 使用 flex 代替 grid 來排列日期和星期標籤
  flex-wrap: nowrap; // 確保所有元素都在一行中顯示
  text-align: center;
  border-bottom: 1px solid #ddd;
  width: 1500px;
  max-width: 100%;
  justify-content: center;
  border-left: 1px solid #ddd;
`;

export default DayGrid;
