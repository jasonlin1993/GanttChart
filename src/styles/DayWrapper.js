import styled from "styled-components";

const DayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid #002f7b;

  background-color: ${(props) => (props.$isWeekend ? "#eef0f2" : "none")};
  color: #002f7b;

  &:last-child {
    border-right: #002f7b;
  }
`;

export default DayWrapper;
