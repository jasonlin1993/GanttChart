import styled from "styled-components";

const MainText = styled.section`
  font-size: 73px;
  color: rgb(0, 47, 123);
  font-family: "微軟正黑體";
  line-height: 73px;
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const Text = styled.div`
  font-size: 20px;
  color: rgb(0, 47, 123);
  font-family: "微軟正黑體";
  line-height: 20px;
  font-weight: bold;
  margin: 30px 10px;
`;

const StyledText = styled.div`
  color: rgb(0, 47, 123);
  font-family: "微軟正黑體", sans-serif;
  font-weight: bold;
  margin: 0 2.5rem;
  bottom: 5px;
`;

export { MainText, Text, StyledText };
