import { createStore } from "redux";
import { combineReducers } from "redux";
import addTodo from "../modules/AddTodo";

const rootReducer = combineReducers({
  addTodo,
});

const store = createStore(rootReducer);

export default store;
