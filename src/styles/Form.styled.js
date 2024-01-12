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

export const HeaderSignInTextFormStyled = styled.header`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 60px;

  .SignInIcon {
    position: absolute;
    bottom: 40px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    transition: background-color 1s;

    &:hover {
      background-color: rgba(128, 128, 128, 0.5);
      width: 28px;
      height: 28px;
      font-size: 28px;
      border-radius: 50%;
    }

    @media (max-width: 600px) {
      position: absolute;
      bottom: 40px;
      right: 20px;
    }
  }
`;

export const HeaderSignUpTextFormStyled = styled.header`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50px;

  .SignUpIcon {
    position: absolute;
    bottom: 30px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    transition: background-color 1s;

    &:hover {
      background-color: rgba(128, 128, 128, 0.5);
      width: 28px;
      height: 28px;
      font-size: 28px;
      border-radius: 50%;
    }

    @media (max-width: 600px) {
      position: absolute;
      bottom: 40px;
      right: 20px;
    }
  }
`;

export const TextFormStyled = styled.h2`
  margin: 5px 0px;
`;

export const FormContainerStyled = styled.form`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

export const FormInputStyled = styled.input`
  height: 40px;
  padding: 18px;
  font-family: "Viga", sans-serif;
  color: gray;
  border: 1px solid #7f8d9f;
  background-color: #eef0f2;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus {
    border: 1px solid #ee3f3f;
    color: #004ecc;
  }
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
  margin-bottom: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;
  &:hover {
    background-color: #00378f;
  }
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

export const ErrorMessageStyled = styled.h3`
  color: red;
  display: flex;
  justify-content: center;
`;

export const SubmitMessageStyled = styled.h3`
  color: red;
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
`;

export const FormLineStyled = styled.hr`
  margin: 10px;
`;
