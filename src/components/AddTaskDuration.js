import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskDuration } from "../redux/action/taskAction";

const AddTaskDuration = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // 只有當所選任務不在列表中時，才重置所選任務 ID
    if (tasks.length > 0 && !tasks.some((task) => task.id === selectedTaskId)) {
      setSelectedTaskId(tasks.length > 0 ? tasks[0].id : "");
    }
  }, [tasks, selectedTaskId]);

  const handleAddTaskDuration = (e) => {
    e.preventDefault();
    if (startDate && endDate && selectedTaskId) {
      console.log("Adding task duration with:", selectedTaskId, startDate, endDate);
      dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
    } else {
      console.error("Error: Missing values for task duration update");
    }
  };

  return (
    <form onSubmit={handleAddTaskDuration}>
      <h3>Task duration</h3>
      <label htmlFor="select-task">Which Task?</label>
      <select value={selectedTaskId} onChange={(e) => setSelectedTaskId(e.target.value)}>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      <label htmlFor="start-date">Start Date</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label htmlFor="end-date">End Date</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTaskDuration;
