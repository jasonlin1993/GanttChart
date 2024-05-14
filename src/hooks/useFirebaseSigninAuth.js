// hooks/useFirebaseAuth.js
import { useState, useEffect } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import firebase from "../lib/firebase";

function useFirebaseSignInAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [authProvider, setAuthProvider] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        const providerId = tokenResult.claims.firebase.sign_in_provider;
        setAuthProvider(providerId);
        setUser(user);
        router.push("/ganttchart");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);

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
      router.push("/ganttchart");
    } catch (error) {
      setError("帳號或密碼輸入錯誤");
      return false;
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(), provider);
      const providerId = result.additionalUserInfo.providerId;
      setAuthProvider(providerId);
    } catch (error) {
      if (
        error.code !== "auth/cancelled-popup-request" &&
        error.code !== "auth/popup-closed-by-user"
      ) {
        console.log("Google 第三方登入取消");
      }
      return false;
    }
  };

  return { user, error, authProvider, signInWithEmail, signInWithGoogle };
}

export default useFirebaseSignInAuth;
