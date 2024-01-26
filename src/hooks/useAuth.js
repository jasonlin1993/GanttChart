import { useEffect, useState } from "react";
import firebase from "../lib/firebase";
import { useRouter } from "next/router";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return isLoggedIn;
};

export default useAuth;
