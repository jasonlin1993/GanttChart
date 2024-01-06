import { GlobalStyle, GlobalBackGroundColor } from "@/styles/Global";

import SignupForm from "@/components/SignupForm";
import { FormContainer } from "@/styles/Form.styled";

const SignupPage = () => {
  return (
    <>
      <GlobalBackGroundColor />
      <GlobalStyle />
      <FormContainer>
        <SignupForm />
      </FormContainer>
    </>
  );
};

export default SignupPage;
