import styled from "styled-components";

export const StyledTaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #002f7b;
  border-right: 1px solid #002f7b;
  max-width: 100%;
  min-width: 205px;
  width: 320px;
  justify-content: center;
  height: 51px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 0 0 0 10px;
  border: none;
  outline: none;
  width: 90%;
  margin-left: 15px;
  color: #002f7b;
  font-size: 18px;

  &:hover {
    border: 1px solid red;
  }
`;

export const StyledDeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0 5px;
  cursor: pointer;
  color: red;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: red;

  &:hover {
    background-color: #ccc;
  }
`;

export const StyledEditTaskInputButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0 5px;
  cursor: pointer;
  color: red;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #002f7b;

  &:hover {
    background-color: #ccc;
  }
`;
