import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  align-items: center; // 水平居中
  justify-content: center; // 垂直居中

  @media (max-width: 1320px) {
    flex-direction: column-reverse; // 垂直堆疊元素
  }
`;

export default MainLayout;
