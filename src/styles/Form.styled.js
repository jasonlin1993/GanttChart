import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  position: relative;
`;

const FilteredFontAwesomeIcon = ({ position, ...props }) => (
  <FontAwesomeIcon {...props} />
);

export const StyledSignInFontAwesomeIcon = styled(FilteredFontAwesomeIcon)`
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
`;

export const StyledSignUpFontAwesomeIcon = styled(FilteredFontAwesomeIcon)`
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
`;

export const HeaderSignInTextFormStyled = styled.header`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 60px;
`;

export const HeaderSignUpTextFormStyled = styled.header`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50px;
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
  background-image: linear-gradient(
    92.88deg,
    #455eb5 9.16%,
    #5643cc 43.89%,
    #673fd7 64.72%
  );
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Noto Sans TC", sans-serif;
  font-size: 26px;
  height: 50px;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  touch-action: manipulation;
  font-family: "微軟正黑體";
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
`;

export const OneClickMemberLoginStyled = styled.input`
  margin-top: 15px;
  margin-bottom: 5px;
  height: 50px;
  border: 0;
  border-radius: 8px;
  background: #ffeb3b;

  font-size: 20px;
  color: #004d40;
  font-weight: bold;
  text-align: center;
  box-shadow: -1px 1px 8px rgba(0, 0, 0, 0.4);
  transition: background 250ms, box-shadow 250ms;
  padding: 10px 20px;
  cursor: pointer;
  font-family: "微軟正黑體";
  &:hover {
    color: #004d40;
    background: #fdd835;
    box-shadow: -2px 2px 16px rgba(0, 0, 0, 0.6);
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
