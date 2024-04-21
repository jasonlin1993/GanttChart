import { useState, useEffect } from "react";
import firebase from "../lib/firebase";

function useFirestoreData(userId) {
  const [memberName, setMemberName] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    if (!userId) {
      console.error("會員尚未登入");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists) {
          setMemberName(userDoc.data().memberName);
        } else {
          setMemberName("找無此會員");
        }

        const projectsSnapshot = await db
          .collection("users")
          .doc(userId)
          .collection("projects")
          .get();

        const projectsData = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          saveTime: doc.data().saveTime,
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error("連結資料庫失敗:", error);
        setMemberName("連結資料庫名稱失敗");
      }
    };

    fetchUserData();
  }, [userId]);

  return { memberName, projects };
}

export default useFirestoreData;
