import styled from "styled-components";

// Styled component for the project name container
export const ProjectNameContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1px solid #002f7b;
  width: 100%;
  justify-content: center;
  height: 51px;
  background-color: #002f7b;
`;

// Styled component for the input
export const ProjectNameInput = styled.input`
  flex-grow: 1;
  padding: 0 0 0 10px;
  border: none;
  background-color: #002f7b;
  color: #eef0f2;
  outline: none;
  &:focus {
    outline: none;
  }
`;
