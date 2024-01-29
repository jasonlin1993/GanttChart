// hooks/useFirebaseAuth.js
import { useState, useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import firebase from "../lib/firebase";

const useFirebaseSignInAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth(), (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithEmail = async (email, password) => {
    if (!email || !password) {
      setError("請輸入電子郵件或密碼");
      return false;
    }

    if (!email.includes("@")) {
      setError("請輸入有效的電子郵件地址");
      return false;
    }

    try {
      await signInWithEmailAndPassword(firebase.auth(), email, password);
    } catch (error) {
      setError("帳號或密碼輸入錯誤");
      return false;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(getAuth(), provider);
    } catch (error) {
      setError("Google 第三方登入錯誤");
      return false;
    }
  };

  return { user, error, signInWithEmail, signInWithGoogle };
};

export default useFirebaseSignInAuth;
