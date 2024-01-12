import styled from "styled-components";

export const StyledTaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #002f7b;
  min-width: 205px;
  width: 100%;
  justify-content: center;
  height: 51px;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0 0 0 10px;
  border: none;
  outline: none;
  width: 100%;

  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const StyledDeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0 5px;
  cursor: pointer;
  color: #ef5350;
`;
