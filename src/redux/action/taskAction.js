// redux/actions/taskActions.js
export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: "REMOVE_TASK",
    payload: taskId,
  };
};

export const addTaskWithDuration = (task) => {
  return {
    type: "ADD_TASK_WITH_DURATION",
    payload: task,
  };
};

export const updateTaskName = (taskId, newName) => {
  return {
    type: "UPDATE_TASK_NAME",
    payload: { taskId, newName },
  };
};

export const updateTaskDuration = (taskId, startDate, endDate) => {
  return {
    type: "UPDATE_TASK_DURATION",
    payload: { taskId, startDate, endDate },
  };
};
