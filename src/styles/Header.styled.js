import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  background-color: #002f7b;
  color: #eef0f2;
  max-width: 100%;

  height: 100px;
  font-weight: inherit;
  font-size: 20px;

  justify-content: space-between;
  align-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    background-color: #003fa3;
  }
`;
