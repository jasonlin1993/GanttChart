// redux/reducers/taskReducer.js
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      return newState;

    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "ADD_TASK_WITH_DURATION":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              startDate: action.payload.startDate,
              endDate: action.payload.endDate,
            };
          }
          return task;
        }),
      };

    case "UPDATE_TASK_NAME":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return { ...task, name: action.payload.newName };
          }
          return task;
        }),
      };

    case "UPDATE_TASK_DURATION":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.taskId) {
            return {
              ...task,
              startDate: action.payload.startDate,
              endDate: action.payload.endDate,
            };
          }
          return task;
        }),
      };

    default:
      return state;
  }
};

export default taskReducer;
