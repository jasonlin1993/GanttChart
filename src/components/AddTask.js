// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";

const AddTask = () => {
  const { year, month } = useSelector((state) => state.date);
  const daysInMonth = new Date(year, month - 1, 0).getDate();
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const daysArray = Array.from({ length: daysInMonth }, () => false); // 创建一个长度等于月份天数的数组，初始值为 false
    const newTask = {
      id: Date.now(),
      name: "New Task",
      days: daysArray, // 添加天数信息
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
