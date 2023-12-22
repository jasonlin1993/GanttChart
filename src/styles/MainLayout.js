import styled from "styled-components";

const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

export default MainLayout;
