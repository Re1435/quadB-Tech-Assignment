import { createStore } from "redux";
import taskReducer from "./taskReducer"; // Importing the task reducer

// Creating a Redux store with the taskReducer
export const store = createStore(taskReducer);
