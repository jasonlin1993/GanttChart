import { useState, useEffect } from "react";
import firebase from "../lib/firebase";

function useFirestoreData(userId) {
  const [memberName, setMemberName] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    if (!userId) {
      console.error("User not logged in");
      return;
    }

    const fetchUserData = async () => {
      try {
        const userDoc = await db.collection("users").doc(userId).get();
        if (userDoc.exists) {
          setMemberName(userDoc.data().memberName);
        } else {
          setMemberName("Member name not found");
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
        console.error("Failed to fetch user data:", error);
        setMemberName("Fetch failed");
      }
    };

    fetchUserData();
  }, [userId]);

  return { memberName, projects };
}

export default useFirestoreData;
