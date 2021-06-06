import { createStore } from "redux";
import { pollsReducer } from "./reducers/polls-reducer";

export const store = createStore(pollsReducer);
