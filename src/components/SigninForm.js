import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  FormStyled,
  HeaderSignInTextFormStyled,
  TextFormStyled,
  FormContainerStyled,
  FormInputStyled,
  FormSubmitInputStyled,
  HaveMemberTextStyled,
  FormLineStyled,
  ErrorMessageStyled,
  StyledSignInFontAwesomeIcon,
  OneClickMemberLoginStyled,
} from "@/styles/Form.styled";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  GoogleAuthButtonStyled,
  GoogleIconStyled,
} from "@/styles/Button.styled";
import useForm from "@/hooks/useForm";
import useFirebasesSignInAuth from "@/hooks/useFirebaseSigninAuth";

function SignInForm({ onSignUpClick }) {
  const [inputState, setFormState] = useForm({
    email: "",
    password: "",
  });

  const router = useRouter();
  const { email, password } = inputState;
  const { user, error, signInWithEmail, signInWithGoogle } =
    useFirebasesSignInAuth();

  useEffect(() => {
    if (user) {
      localStorage.setItem("LoginSuccess", "true");
      localStorage.setItem("MemberLoginSuccess", "true");
      router.push("/ganttchart");
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  const handleQuickLoginClick = async (e) => {
    e.preventDefault();
    const testEmail = "test@test.com";
    const testPassword = "123456";
    await signInWithEmail(testEmail, testPassword);
  };

  const handleGoogleClick = async (e) => {
    e.preventDefault();
    await signInWithGoogle();
  };

  const handleMainPageClick = () => {
    router.push("/");
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderSignInTextFormStyled>
          <StyledSignInFontAwesomeIcon
            icon={faXmark}
            onClick={handleMainPageClick}
          />
          <h2> 🔐 會員登入</h2>
        </HeaderSignInTextFormStyled>

        <FormContainerStyled>
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
            <label htmlFor="pwd">Password</label>
          </TextFormStyled>
          <FormInputStyled
            type="password"
            id="password"
            name="password"
            placeholder="至少六位數"
            onChange={(e) => setFormState(e)}
          />

          <FormSubmitInputStyled type="submit" value="會員登入" />

          <OneClickMemberLoginStyled
            type="submit"
            onClick={handleQuickLoginClick}
            value="使用測試帳號一鍵登入"
          />

          {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
          <FormLineStyled />
          <GoogleAuthButtonStyled onClick={handleGoogleClick}>
            <GoogleIconStyled />
            Google 快速登入
          </GoogleAuthButtonStyled>
          <HaveMemberTextStyled onClick={onSignUpClick}>
            尚未註冊會員?
          </HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SignInForm;
