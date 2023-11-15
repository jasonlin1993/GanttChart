// redux/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import dateReducer from "./dateReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  date: dateReducer,
  tasks: taskReducer,
});

export default rootReducer;
