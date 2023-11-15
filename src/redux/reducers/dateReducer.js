// reducers/dateReducer.js
const initialState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default dateReducer;
