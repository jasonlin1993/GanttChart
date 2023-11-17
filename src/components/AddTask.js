// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";

const AddTask = () => {
  const { year, month } = useSelector((state) => state.date);
  const daysInMonth = new Date(year, month, 0).getDate();
  console.log(daysInMonth);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    // 使用正確的年份和月份來計算天數
    const daysInMonth = new Date(year, month - 1, 0).getDate();
    // 創建一個對應當月天數的數組，所有值都設為 false
    const daysArray = Array.from({ length: daysInMonth }, () => false);
    console.log("dayArray:", daysArray);
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
      <button onClick={handleAddTask}>Add Task</button>
    </>
  );
};

export default AddTask;
