// pages/register/RegisterPage.js
import React, { useState } from "react";
import SignupForm from "@/components/SignupForm";
import SignInForm from "@/components/SigninForm";
import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";
import { FormContainer } from "@/styles/Form.styled";

const RegisterPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => setShowSignUp(!showSignUp);

  return (
    <>
      <GlobalBackGroundColor />
      <GlobalStyle />
      <FormContainer>
        {showSignUp ? <SignupForm onSignInClick={toggleForm} /> : <SignInForm onSignUpClick={toggleForm} />}
      </FormContainer>
    </>
  );
};

export default RegisterPage;
