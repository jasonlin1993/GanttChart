import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskWithDuration, updateTaskDuration } from "../redux/action/taskAction";

const AddTaskDuration = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // 從 store 獲取任務
  const [selectedTaskId, setSelectedTaskId] = useState(tasks[0]?.id || ""); // 預設選擇第一個任務
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  const handleAddTaskDuration = () => {
    if (startDate && endDate && selectedTaskId) {
      // 使用正確的任務 ID 和日期派發動作
      dispatch(updateTaskDuration(selectedTaskId, startDate, endDate));
      console.log(`Task Duration Updated: ${selectedTaskId}, ${startDate}, ${endDate}`);
    }
  };

  return (
    <>
      <h3>Task duration</h3>
      <h3>Which Task?</h3>
      <select value={selectedTaskId} onChange={(e) => setSelectedTaskId(e.target.value)}>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      <h3>Start Date</h3>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <h3>End Date</h3>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleAddTaskDuration}>Add</button>
    </>
  );
};

export default AddTaskDuration;
