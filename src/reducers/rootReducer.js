import { combineReducers } from "redux";
import todoList from "../slices/toDo";

const rootReducer = combineReducers({
  todoList
});

export default rootReducer;
