// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddTaskButton } from "@/styles/Calendar.styled";

const AddTask = () => {
  const { year, month } = useSelector((state) => state.date);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const daysInMonth = new Date(year, month - 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth });
    const newTask = {
      id: Date.now(),
      name: "新增任務",
      days: daysArray,
    };
    dispatch(addTask(newTask));
  };

  return (
    <>
      <AddTaskButton onClick={handleAddTask}>
        <div style={{ margin: "15px 120px 0px 0px" }}>
          <FontAwesomeIcon icon={faPlus} style={{ margin: "10px 15px 0px 0px" }} />
          新增任務
        </div>
      </AddTaskButton>
    </>
  );
};

export default AddTask;
