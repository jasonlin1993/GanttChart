import React, { useState, useEffect } from "react";
import firebase from "../lib/firebase";
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
} from "@/styles/Form.styled";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { GoogleAuthButtonStyled } from "@/styles/Button.styled";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useForm from "@/hooks/useForm";
import { FcGoogle } from "react-icons/fc";

function SignInForm() {
  const [inputState, setFormState] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = inputState;
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("請輸入電子郵件或密碼");
      return;
    }

    if (!email.includes("@")) {
      setErrorMessage("請輸入有效的電子郵件地址");
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem("LoginSuccess", "true");
        localStorage.setItem("MemberLoginSuccess", "true");
        router.push("/ganttchart");
      })
      .catch((error) => {
        setErrorMessage("帳號或密碼輸入錯誤", error);
      });
  }

  function handleGoogleClick(e) {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        localStorage.setItem("LoginSuccess", "true");
        router.push("/ganttchart");
      })
      .catch((error) => {
        console.error("Google 第三方登入錯誤訊息: ", error);
      });
  }

  function handleSignUpClick() {
    router.push("/signup");
  }

  function handleMainPageClick() {
    router.push("/");
  }

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderSignInTextFormStyled>
          <FontAwesomeIcon className="SignInIcon" icon={faXmark} onClick={handleMainPageClick} />
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

          {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}
          <FormLineStyled />
          <GoogleAuthButtonStyled onClick={handleGoogleClick}>
            <FcGoogle style={{ margin: "0px 30px -6px 0px" }} size="32px" />
            Google 快速登入
          </GoogleAuthButtonStyled>
          <HaveMemberTextStyled onClick={handleSignUpClick}>尚未註冊會員?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SignInForm;
