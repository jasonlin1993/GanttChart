import styled from "styled-components";

export const StyledDragTaskDurationComponent = styled.div`
  z-index: 1;
  height: 30px;
  border-radius: 8px;
  background-color: rgb(187, 220, 0);
  width: ${({ durationDays, totalDays }) =>
    `${(durationDays / totalDays) * 100}%`};
  margin: 12px 0px 0px;
  border: 1px solid black;
  position: absolute;
  left: ${({ startDayIndex, totalDays }) =>
    `${(startDayIndex / totalDays) * 100}%`};

  cursor: move;
  background-color: ${(props) => props.backgroundColor || "defaultBackground"};
`;
