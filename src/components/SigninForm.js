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
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        router.push("/ganttchart");
      })
      .catch((error) => {
        console.error("Google 第三方登入錯誤訊息: ", error);
      });
  }

  function handleSignupClick() {
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

          <FormSubmitInputStyled type="submit" value="登入" />

          {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}
          <FormLineStyled />
          <GoogleAuthButtonStyled onClick={handleGoogleClick}>
            <FontAwesomeIcon icon={faGoogle} style={{ margin: "0px 40px 0px 0px" }} />
            Google 快速登入
          </GoogleAuthButtonStyled>
          <HaveMemberTextStyled onClick={handleSignupClick}>尚未註冊會員?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SigninForm;
