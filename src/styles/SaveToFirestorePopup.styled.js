import styled from "styled-components";

export const StyledSaveDataToFireStorePopUp = styled.dialog`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 340px;
  height: 185px;
  left: 50%;
  top: 80px;
  transform: translate(-50%);
  border: none;
  box-shadow: 0 2px 6px #ccc;
  border-radius: 10px;
`;
export const StyledContent = styled.div`
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

export const StyledTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledTaskNameInputDate = styled.input`
  margin: 0px 10px;
  height: 36px;
  width: 165px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 10px;
  color: #002f7a;
  font-size: 18px;
  font-weight: bold;
`;

export const StyledSaveButton = styled.button`
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

export const StyledCancelButton = styled.button`
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

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: relative;
  top: 10%;
`;

export const StyledSaveTaskNameContainer = styled.div`
  top: 10%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-size: 20px;
  color: #002f7a;
  margin-bottom: 10px;
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
