import React, { useState } from "react";
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
} from "@/styles/Form.styled";

import { useRouter } from "next/router";
import firebase from "../lib/firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useForm from "@/hooks/useForm";

const SignupForm = () => {
  const [inputState, setFormState] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = inputState;
  const router = useRouter();
  const [submitMessage, setSubmitMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setSubmitMessage("請輸入信箱或密碼");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setFormState({
              email: "",
              password: "",
            });
            setSubmitMessage("註冊成功，請登入會員");
            router.push("/signup");
          });
      })
      .catch((error) => {
        console.error("註冊失敗", error);
        setSubmitMessage("註冊失敗");
      });
  };

  const handleSignInClick = () => {
    router.push("/signin");
  };

  const handleMainPageClick = () => {
    router.push("/");
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderSignUpTextFormStyled>
          <FontAwesomeIcon className="SignUpIcon" icon={faXmark} onClick={handleMainPageClick} />
          <h2> 🔐 會員註冊</h2>
        </HeaderSignUpTextFormStyled>

        <FormContainerStyled>
          <TextFormStyled>
            <label htmlFor="memberName">廠商名稱</label>
          </TextFormStyled>
          <FormInputStyled type="name" id="memberName" name="memberName" placeholder="XX建設股份有限公司" />

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

          <FormSubmitInputStyled type="submit" value="註冊" />

          {submitMessage && <SubmitMessageStyled>{submitMessage}</SubmitMessageStyled>}
          <FormLineStyled />

          <HaveMemberTextStyled onClick={handleSignInClick}>已經有帳號了?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
};

export default SignupForm;
