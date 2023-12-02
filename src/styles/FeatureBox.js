import styled from "styled-components";

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 3px solid rgb(0, 47, 123);
  margin: 15px;
  border-radius: 5%;
  padding-top: 20px;

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default FeatureBox;
