import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 150px;
  height: 20px;
  padding: 5px 10px 30px 5px;
  border: 1px solid #002f7b;
  background-color: "#eef0f2";
  cursor: pointer;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  margin: 0 15px;
  color: #002f7b;
  font-size: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    background-color: #d1d6dc;
  }
`;

export const MainPageButtonStyled = styled.button`
  width: 320px;
  height: 20px;
  padding: 5px 10px 40px 10px;
  border: 5px solid black;
  background-color: "#eef0f2";
  cursor: pointer;
  text-align: center;
  justify-content: center;
  border-radius: 5px;

  color: #002f7b;
  font-size: 25px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    background-color: #46505d;
    color: #eef0f2;
  }
`;

export default ButtonStyled;
