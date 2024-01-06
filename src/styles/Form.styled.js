import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const FormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 400px;
  max-height: 100%;
  height: 600px;
  flex-direction: column;
  background-color: #eef0f2;
  border-radius: 15px;
  font-family: "Viga", sans-serif;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  position: relative;
`;

export const HeaderTextFormStyled = styled.header`
  width: 100%; // Take the full width of the container
  text-align: center; // Center the text inside the header
  position: relative;
  bottom: 100px;
`;

export const TextFormStyled = styled.h2`
  margin: 5px 0px;
`;

export const FormContainerStyled = styled.form`
  display: flex;
  width: 80%;
  flex-direction: column;
  bottom: 65px;
  position: relative;
`;

export const FormInputStyled = styled.input`
  height: 40px;
  padding: 15px;
  font-family: "Viga", sans-serif;
  color: gray;
  border: 1px solid #7f8d9f;
  background-color: #eef0f2;
  font-size: 20px;
`;

export const FormSubmitInputStyled = styled.input`
  height: 50px;
  background-color: #004ecc;
  color: #eef0f2;
  font-family: "微軟正黑體";
  font-size: 25px;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
`;

export const HaveMemberTextStyled = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    color: #eec643;
  }
`;
