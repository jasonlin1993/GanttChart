// styles/StyledInput.js
import styled from "styled-components";

const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid rgb(0, 47, 123);
  margin-bottom: 1rem;
  padding: 0.5rem;
  color: rgb(0, 47, 123);
  font-family: "微軟正黑體";
  font-size: 15px;
  bottom: 5px;

  &:focus {
    outline: none;
    border-bottom: 3px solid rgb(0, 47, 123);
  }

  width: calc(100% - 5rem);
  margin: 0 2rem;
`;

export default StyledInput;
