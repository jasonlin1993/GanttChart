// components/AddTask.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/action/taskAction";
import { ButtonStyled } from "@/styles/Button.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faPlus} style={{ margin: "0px 10px" }} />
        新增任務
      </ButtonStyled>
    </>
  );
};

export default AddTask;
