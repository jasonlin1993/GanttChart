import React, { useState, useEffect } from "react";
import firebase from "../lib/firebase";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("請輸入電子郵件和密碼");
      return;
    }

    if (!email.includes("@")) {
      alert("請輸入有效的電子郵件地址");
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        router.push("/ganttchart");
      })
      .catch((error) => {
        console.log("登入失敗:", error.message);
        alert("登入失敗" + error.message);
      });
  }

  function handleSignupClick() {
    router.push("/signup");
  }

  function hadleMainPageClick() {
    router.push("/");
  }

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <HeaderTextFormStyled>
          <FontAwesomeIcon className="signicon" icon={faXmark} onClick={hadleMainPageClick} />
          <h2> 🔐 會員登入</h2>
        </HeaderTextFormStyled>

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
          <br />
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
          <br />

          <FormSubmitInputStyled type="submit" value="登入" />
          <br />
          <hr />

          <HaveMemberTextStyled onClick={handleSignupClick}>尚未註冊會員?</HaveMemberTextStyled>
        </FormContainerStyled>
      </FormStyled>
    </>
  );
}

export default SigninForm;
