import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import "firebase/compat/firestore";
import useForm from "@/hooks/useForm";
import useFirebaseSignUpAuth from "@/hooks/useFirebaseSignupAuth";
import {
  FormStyled,
  HeaderSignUpTextFormStyled,
  TextFormStyled,
  FormContainerStyled,
  FormInputStyled,
  FormSubmitInputStyled,
  HaveMemberTextStyled,
  SubmitMessageStyled,
  FormLineStyled,
  StyledSignUpFontAwesomeIcon,
} from "@/styles/Form.styled";

function SignupForm({ onSignInClick }) {
  const [inputState, setFormState] = useForm({
    email: "",
    password: "",
    memberName: "",
  });
  const { email, password, memberName } = inputState;
  const { registerUser, submitMessage } = useFirebaseSignUpAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationSuccess = await registerUser(email, password, memberName);
    if (registrationSuccess) {
      router.push("/ganttchart");
    }
  };

  const handleMainPageClick = () => {
    router.push("/");
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderSignUpTextFormStyled>
          <StyledSignUpFontAwesomeIcon
            icon={faXmark}
            onClick={handleMainPageClick}
          />
          <h2> 🔐 會員註冊</h2>
        </HeaderSignUpTextFormStyled>

        <FormContainerStyled>
          <TextFormStyled>
            <label htmlFor="memberName">廠商名稱</label>
          </TextFormStyled>
          <FormInputStyled
            type="text"
            id="memberName"
            name="memberName"
            placeholder="XX建設股份有限公司"
            onChange={(e) => setFormState(e)}
          />

          <TextFormStyled>
            <label htmlFor="email">Email</label>
          </TextFormStyled>
          <FormInputStyled
            type="email"
            id="email"
            name="email"
            placeholder="test@test.com"
            onChange={(e) => setFormState(e)}
          />

          <TextFormStyled>
            <label htmlFor="password">Password</label>
          </TextFormStyled>
          <FormInputStyled
            type="password"
            id="password"
            name="password"
            placeholder="至少六位數"
            onChange={(e) => setFormState(e)}
          />

          <FormSubmitInputStyled type="submit" value="會員註冊" />

          {submitMessage && (
            <SubmitMessageStyled>{submitMessage}</SubmitMessageStyled>
          )}
          <FormLineStyled />

          <HaveMemberTextStyled onClick={onSignInClick}>
            已經有帳號了?
          </HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SignupForm;
