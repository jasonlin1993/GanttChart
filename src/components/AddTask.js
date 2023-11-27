// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";
import Button from "@/styles/Button";

const AddTask = () => {
  const { year, month } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const daysInMonth = new Date(year, month - 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth });
    const newTask = {
      id: Date.now(),
      name: "New Task",
      days: daysArray,
    };
    dispatch(addTask(newTask));
  };

  return (
    <>
      <h3>Add Task</h3>
      <Button onClick={handleAddTask}>
        <picture>
          <img
            src="../../icons/plus-solid.svg"
            alt="AddIcon"
            style={{ width: "10px", padding: "5px 4.5px 0px 0px", textAlign: "center" }}
          />
          Add Task
        </picture>
      </Button>
    </>
  );
};

export default AddTask;
