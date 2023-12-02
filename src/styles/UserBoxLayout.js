import styled from "styled-components";

const UserBoxLayout = styled.div`
  display: flex;
  flex-direction: column; // 改為 column 以使子元素在垂直方向上排列
  align-items: center; // 水平居中
  justify-content: center; // 垂直居中
  height: 100vh; // 使 MainLayout 佔滿整個視窗的高度
  width: 100vw; // 可選，如果你希望 MainLayout 也佔滿視窗的寬度
  background-color: #f6f7fb;
`;

export default UserBoxLayout;
