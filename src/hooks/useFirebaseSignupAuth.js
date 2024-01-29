import { useState } from "react";
import firebase from "../lib/firebase";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function useFirebaseSignUpAuth() {
  const [submitMessage, setSubmitMessage] = useState("");

  const registerUser = (email, password, memberName) => {
    if (!email || !password || !memberName) {
      setSubmitMessage("輸入欄位不可為空值");
      return false;
    }
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return firebase.firestore().collection("users").doc(user.uid).set({
          memberName,
          email,
        });
      })
      .then(() => {
        localStorage.setItem("registrationSuccess", "true");
        setSubmitMessage("");
        return true;
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setSubmitMessage("信箱已經重複註冊");
        } else {
          console.error("註冊失敗", error);
          setSubmitMessage("註冊失敗");
        }
        return false;
      });
  };

  return { registerUser, submitMessage, setSubmitMessage };
}

export default useFirebaseSignUpAuth;
