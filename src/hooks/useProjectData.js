import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import firebase from "../lib/firebase";
import { setTasks, setTasksModified } from "../redux/action/taskAction";
import { setDate } from "../redux/action/dateAction";

function useProjectData() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const userId = firebase.auth().currentUser?.uid;
      const projectId = router.query.projectId || "defaultProjectName";

      try {
        const projectRef = db
          .collection("users")
          .doc(userId)
          .collection("projects")
          .doc(projectId);
        const doc = await projectRef.get();
        if (doc.exists) {
          const data = doc.data();
          dispatch(setTasks(data.tasks));
          dispatch(setDate(data.date));
          dispatch(setTasksModified(false));
        }
      } catch (error) {
        console.error("資料庫連結失敗:", error);
      }
    };

    fetchData();
  }, [dispatch, router.query.projectId]);
}

export default useProjectData;
