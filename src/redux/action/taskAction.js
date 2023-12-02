// redux/actions/taskActions.js
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const removeTask = (taskId) => ({
  type: "REMOVE_TASK",
  payload: taskId,
});

export const updateTaskName = (taskId, newName) => ({
  type: "UPDATE_TASK_NAME",
  payload: { taskId, newName },
});

export const updateTaskDuration = (taskId, startDate, endDate) => ({
  type: "UPDATE_TASK_DURATION",
  payload: { taskId, startDate, endDate },
});
