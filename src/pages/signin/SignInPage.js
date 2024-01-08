import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";

import SigninForm from "@/components/SigninForm";
import { FormContainer } from "@/styles/Form.styled";

const SignupPage = () => {
  return (
    <>
      <GlobalBackGroundColor />
      <GlobalStyle />
      <FormContainer>
        <SigninForm />
      </FormContainer>
    </>
  );
};

export default SignupPage;
