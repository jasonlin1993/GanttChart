// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";
import ButtonStyled from "@/styles/Button.styled";

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
      <ButtonStyled onClick={handleAddTask}>
        <picture>
          <img
            src="../../icons/plus-solid.svg"
            alt="AddIcon"
            style={{ width: "15px", padding: "5px 4.5px 0px 0px", textAlign: "center" }}
          />
          新增任務
        </picture>
      </ButtonStyled>
    </>
  );
};

export default AddTask;
