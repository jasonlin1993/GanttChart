import React from "react";
import {
  FormStyled,
  HeaderTextFormStyled,
  TextFormStyled,
  FormContainerStyled,
  FormInputStyled,
  FormSubmitInputStyled,
  HaveMemberTextStyled,
} from "@/styles/Form.styled";

import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter();

  const handleSigninClick = () => {
    router.push("/signin");
  };
  return (
    <>
      <FormStyled>
        <HeaderTextFormStyled>
          <h2> 🔐 會員註冊</h2>
        </HeaderTextFormStyled>

        <FormContainerStyled>
          <TextFormStyled>
            <label for="email">Email</label>
          </TextFormStyled>

          <FormInputStyled type="email" id="email" name="email" placeholder="test@test.com" />
          <br />
          <TextFormStyled>
            <label for="pwd">Password</label>
          </TextFormStyled>

          <FormInputStyled type="password" id="pwd" name="pwd" placeholder="至少六位數" />
          <br />

          <FormSubmitInputStyled type="submit" value="註冊" />
          <br />
          <hr />

          <HaveMemberTextStyled onClick={handleSigninClick}>已經有帳號了?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
};

export default SignupForm;
