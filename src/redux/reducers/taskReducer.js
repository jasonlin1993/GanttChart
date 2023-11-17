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

    default:
      return state;
  }
};

export default taskReducer;
