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
  min-width: 200px;
  border: none;
  border-radius: 4px;
  background-color: #16a085;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition-duration: 0.4s;
  padding: 10px 20px;
  box-shadow: 0 5px 15px #193047;
  font-size: 30px;
  &:hover {
    background: #ffffff;
    box-shadow: 0px 2px 10px 5px #1abc9c;
    color: #000000;
    cursor: pointer;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    background: #1abc9c;
    opacity: 0;
    transition: all 0.8s;
  }

  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const GoogleAuthButtonStyled = styled.button`
  height: 50px;
  background-color: #eef0f2;
  color: black;

  font-size: 25px;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  &:hover {
    background-color: #dce0e4;
  }
`;
