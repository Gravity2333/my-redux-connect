import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counter";
import { thunk } from "redux-thunk";
import { headerReducer } from "./header";

export const store = createStore(
  combineReducers({
    counter: counterReducer,
    header: headerReducer,
  }),
  applyMiddleware(thunk)
);
