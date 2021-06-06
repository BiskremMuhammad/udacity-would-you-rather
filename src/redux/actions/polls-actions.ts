import { Poll } from "../../types/poll";

export enum PollsActionsTypes {
  LOAD_QUESTIONS = "LOAD_QUESTIONS",
  ADD_QUESTION = "ADD_QUESTION",
  VOTE = "VOTE",
}

export interface UserVote {
  poll: string;
  user: string;
  answer: "A" | "B";
}

export interface PollAction {
  type: PollsActionsTypes;
  payload: Poll[] | Poll | UserVote;
}
