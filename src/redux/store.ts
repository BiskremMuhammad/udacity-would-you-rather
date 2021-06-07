import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { pollsReducer } from "./reducers/polls-reducer";
import { getAllQuestions } from "./thunky-actions";

export const store = createStore(pollsReducer, applyMiddleware(thunk));
// load all questions at inital load
store.dispatch(getAllQuestions() as any);
