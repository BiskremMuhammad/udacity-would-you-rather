import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { pollsReducer } from "./reducers/polls-reducer";

export const store = createStore(pollsReducer, applyMiddleware(thunk));
