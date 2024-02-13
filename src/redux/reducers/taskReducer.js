// redux/reducers/taskReducer.js
const initialState = {
  tasks: [],
  taskCount: 0,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
        taskCount: state.taskCount + 1,
      };

    case "REMOVE_TASK":
      const isLastTask = state.tasks.length === 1;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        taskCount: isLastTask ? 0 : state.taskCount, // 如果刪除後沒有任務則重置
      };

    case "UPDATE_TASK_NAME":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, name: action.payload.newName }
            : task
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
              }
            : task
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
