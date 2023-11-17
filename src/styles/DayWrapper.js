import styled from "styled-components";

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #ddd;
  background-color: ${(props) => (props.$isWeekend ? "#f0f0f0" : "none")};
`;

export default DayWrapper;
