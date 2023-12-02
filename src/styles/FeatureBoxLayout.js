import styled from "styled-components";

const FeatureBoxLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1200px) {
    justify-content: space-around; // 平均分布子元素
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default FeatureBoxLayout;
