import styled from "styled-components";
import { RxDragHandleDots2 } from "react-icons/rx";

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
  padding: 0 0 0 5px;
  border: none;
  outline: none;
  width: 90%;
  color: #002f7b;
  font-size: 15px;
  border-radius: 5px;

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

export const StyledEditTaskInputPopUp = styled.dialog`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 340px;
  height: 295px;
  left: 50%;
  top: 80px;
  transform: translate(-50%);
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
`;

export const StyledEditTaskContent = styled.div`
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right, #002f7a, #002f7b, #0046b8);
  color: white;
  font-size: 23px;
  padding: 10px;
  top: 0%;
`;

export const StyledEditTaskTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledEditTaskDurationContainer = styled.div`
  top: 5%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 20px;
  color: #002f7a;
  margin-bottom: 10px;
`;

export const StyledEditTaskDurationInputDate = styled.input`
  margin: 0px 10px;
  height: 36px;
  width: 165px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 10px;
`;

export const StyledEditTaskDurationColorPickContainer = styled.div`
  display: flex;
  width: 165px;
  height: 36px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StyledEditTaskDurationColorBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "32px"};
  height: 34px;
  border-right: 1px solid black;
  background-color: ${(props) => props.color || "yellow"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverColor || "#e0e000"};
  }
  border-radius: ${(props) => props.$borderRadius || "0px 0px 0px 0px"};
`;

export const StyledEditTaskButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: relative;
  top: 6%;
`;

export const StyledEditTaskCancelButton = styled.button`
  position: relative;
  background: linear-gradient(to right, #dd2525, #e34f4f);
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 15px;
  height: 35px;
  width: 90px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  touch-action: manipulation;
  font-family: "微軟正黑體";
  font-weight: bold;
  border-radius: 5px;
`;

export const StyledEditTaskSaveButton = styled.button`
  position: relative;
  background: linear-gradient(to right, #2e1cf1, #6052f4);
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "微軟正黑體";
  font-size: 15px;
  height: 35px;
  width: 90px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  touch-action: manipulation;
  font-family: "微軟正黑體";
  font-weight: bold;
  border-radius: 5px;
`;

export const StyledErrorMessage = styled.div`
  margin: 28px 0px -35px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 15px;
  color: red;
  bottom: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const StyledDragHandleDots = styled(RxDragHandleDots2)`
  margin: 0px 0px 0px 10px;
  cursor: move;
  font-size: 22px;
`;
