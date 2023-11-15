// store.js
import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./reducers/dateReducer";
import taskReducer from "./reducers/taskReducer";

const store = configureStore({
  reducer: {
    date: dateReducer,
    tasks: taskReducer,
  },
});

export default store;
