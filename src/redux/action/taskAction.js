export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
  isTasksModified: true,
});

export const removeTask = (taskId) => ({
  type: "REMOVE_TASK",
  payload: taskId,
  isTasksModified: true,
});

export const updateTaskName = (taskId, newName) => ({
  type: "UPDATE_TASK_NAME",
  payload: { taskId, newName },
  isTasksModified: true,
});

export const updateTaskDuration = (taskId, startDate, endDate) => ({
  type: "UPDATE_TASK_DURATION",
  payload: { taskId, startDate, endDate },
  isTasksModified: true,
});

export const updateTaskColor = (taskId, color) => ({
  type: "UPDATE_TASK_COLOR",
  payload: { taskId, color },
  isTasksModified: true,
});

export const setTasks = (tasks) => ({
  type: "SET_TASKS",
  payload: tasks,
});

export const setTasksModified = (modified) => ({
  type: "SET_TASKS_MODIFIED",
  payload: modified,
});

export const setDate = (date) => {
  return {
    type: "SET_DATE",
    payload: date,
  };
};
