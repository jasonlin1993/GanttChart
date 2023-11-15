// components/AddTask.js
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action/taskAction";

const AddTask = () => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name: "New Task",
    };
    dispatch(addTask(newTask));
    console.log("Task added:", newTask);
  };

  return (
    <>
      <h3>Add Task</h3>
      <button onClick={handleAddTask}>Add Task</button>
    </>
  );
};

export default AddTask;
