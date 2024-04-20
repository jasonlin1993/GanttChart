// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  AddTaskButton,
  TaskIconContainer,
  TaskIcon,
} from "@/styles/Calendar.styled";

function AddTask() {
  const year = useSelector((state) => state.date.year);
  const month = useSelector((state) => state.date.month);
  const taskCount = useSelector((state) => state.tasks.taskCount);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth });
    const newTask = {
      id: Date.now(),
      name: `新增任務 ${taskCount + 1}`,
      days: daysArray,
    };
    dispatch(addTask(newTask));
  };

  return (
    <>
      <AddTaskButton onClick={handleAddTask}>
        <TaskIconContainer>
          <TaskIcon icon={faPlus} />
          新增任務
        </TaskIconContainer>
      </AddTaskButton>
    </>
  );
}

export default AddTask;
