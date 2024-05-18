const initialState = {
  tasks: [],
  taskCount: 0,
  isTaskModified: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
        taskCount: state.taskCount + 1,
        isTasksModified: true,
      };

    case "REMOVE_TASK":
      const isLastTask = state.tasks.length === 1;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        taskCount: isLastTask ? 0 : state.taskCount,
        isTasksModified: true,
      };

    case "UPDATE_TASK_NAME":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, name: action.payload.newName }
            : task
        ),
        isTasksModified: true,
      };
    case "UPDATE_TASK_DURATION":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
              }
            : task
        ),
        isTasksModified: true,
      };

    case "UPDATE_TASK_COLOR":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, color: action.payload.color }
            : task
        ),
        isTasksModified: true,
      };

    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
        isTasksModified: true,
      };

    case "SET_TASKS_MODIFIED":
      return {
        ...state,
        isTasksModified: action.payload,
      };

    case "UPDATE_TASK_DATES":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? {
                ...task,
                startDate: action.payload.newStartDate,
                endDate: action.payload.newEndDate,
              }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
