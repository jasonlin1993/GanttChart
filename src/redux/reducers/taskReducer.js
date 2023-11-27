// redux/reducers/taskReducer.js
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "UPDATE_TASK_NAME":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? { ...task, name: action.payload.newName } : task
        ),
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
                year: action.payload.year,
                month: action.payload.month,
              }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
