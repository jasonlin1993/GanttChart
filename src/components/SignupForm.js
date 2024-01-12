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

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [submitMessage, setSubmitMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setEmail("");
            setPassword("");
            setSubmitMessage("註冊成功，請登入會員");
            router.push("/signup");
          });
      })
      .catch((error) => {
        console.error("註冊失敗", error);
        setSubmitMessage("註冊失敗");
      });
  }

  function handleSigninClick() {
    router.push("/signin");
  }

  function hadleMainPageClick() {
    router.push("/");
  }

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderSignUpTextFormStyled>
          <FontAwesomeIcon className="SignUpIcon" icon={faXmark} onClick={hadleMainPageClick} />
          <h2> 🔐 會員註冊</h2>
        </HeaderSignUpTextFormStyled>

        <FormContainerStyled>
          <TextFormStyled>
            <label htmlFor="name">廠商名稱</label>
          </TextFormStyled>
          <FormInputStyled
            type="name"
            id="name"
            name="name"
            placeholder="XX建設股份有限公司"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextFormStyled>
            <label htmlFor="email">Email</label>
          </TextFormStyled>
          <FormInputStyled
            type="email"
            id="email"
            name="email"
            placeholder="test@test.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextFormStyled>
            <label htmlFor="pwd">Password</label>
          </TextFormStyled>
          <FormInputStyled
            type="password"
            id="pwd"
            name="pwd"
            placeholder="至少六位數"
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormSubmitInputStyled type="submit" value="註冊" />

          {submitMessage && <SubmitMessageStyled>{submitMessage}</SubmitMessageStyled>}
          <FormLineStyled />

          <HaveMemberTextStyled onClick={handleSigninClick}>已經有帳號了?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SignupForm;
