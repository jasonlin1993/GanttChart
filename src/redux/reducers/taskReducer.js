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
      console.log("New task state:", newState); // 输出新状态以便调试
      return newState;
    default:
      return state;
  }
};

export default taskReducer;
