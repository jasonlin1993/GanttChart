import styled from "styled-components";

const LoginButton = styled.div`
  width: 78px;
  height: 20px;
  padding: 5px 10px 5px 8px;
  border: 2.5px solid rgb(0, 47, 123);
  cursor: pointer;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 20px;
  color: rgb(0, 47, 123);
  font-family: "微軟正黑體";
  line-height: 20px;
  font-weight: bold;
  margin: 30px 10px;

  &:hover {
    background-color: #ebebe8;
  }
`;

export default LoginButton;
