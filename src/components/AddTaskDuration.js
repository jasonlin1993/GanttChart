import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskDuration } from "../redux/action/taskAction";

const AddTaskDuration = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleTaskNameChange = (name) => {
    setTaskName(name);
    const foundTask = tasks.find((task) => task.name === name);
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
      <h3>Task duration</h3>
      <h3>Which Task?</h3>
      <input
        type="text"
        value={taskName}
        onChange={(e) => handleTaskNameChange(e.target.value)}
        placeholder="Enter task name"
      />
      <h3>Start Date</h3>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <h3>End Date</h3>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleAddTaskDuration}>Add</button>
    </>
  );
};

export default AddTaskDuration;
