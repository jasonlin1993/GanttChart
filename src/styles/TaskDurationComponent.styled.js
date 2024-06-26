import styled from "styled-components";

export const StyledDragTaskDurationComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.$backgroundColor};
  width: ${(props) => props.$widthPercentage};
  margin: 12px 0px 0px;
  border: 1px solid #ccc;
  position: absolute;
  left: ${(props) => props.$leftPercentage};
`;

export const StyledLeftDragAndDropContainer = styled.div`
  display: ${(props) => (props.hovered ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  width: 15px;
  height: 25px;
  padding: 0px 1px;
  cursor: ew-resize;
`;

export const StyledCenterDragAndDropContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
`;

export const StyledRightDragAndDropContainer = styled.div`
  display: ${(props) => (props.hovered ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  width: 15px;
  height: 25px;
  padding: 0px 1px;
  cursor: ew-resize;
`;
