import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskDuration } from "../redux/action/taskAction";
import { ButtonStyled } from "@/styles/Button.styled";

const AddTaskDuration = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleTaskSelectionChange = (e) => {
    const selectedTaskName = e.target.value;
    const foundTask = tasks.find((task) => task.name === selectedTaskName);
    setSelectedTaskId(foundTask ? foundTask.id : null);
  };
  const handleAddTaskDuration = () => {
    if (!selectedTaskId) {
      console.error("Error: Please enter a valid task name to update the duration for");
      return;
    }
    if (startDate && endDate) {
      console.log("Adding task duration with:", selectedTaskId, startDate, endDate);
      dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
    } else {
      console.error("Error: Missing values for task duration update");
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", margin: "0 20px" }}>
        <h3>任務名稱</h3>
        <select onChange={handleTaskSelectionChange} defaultValue="">
          <option value="" disabled>
            選擇任務
          </option>
          {tasks.map((task) => (
            <option key={task.id} value={task.name}>
              {task.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", margin: "0 10px" }}>
        <h3>開始時間</h3>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", margin: "0 10px" }}>
        <h3>結束時間</h3>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <ButtonStyled onClick={handleAddTaskDuration}>新增任務時間</ButtonStyled>
    </>
  );
};

export default AddTaskDuration;
