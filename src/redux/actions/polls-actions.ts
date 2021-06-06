import { Poll } from "../../types/poll";

export enum PollsActionsTypes {
  ADD_QUESTION = "ADD_QUESTION",
  VOTE_FOR_OPTION_A = "VOTE_FOR_OPTION_A",
  VOTE_FOR_OPTION_B = "VOTE_FOR_OPTION_B",
}

export interface UserVote {
  poll: string;
  user: string;
}

export interface PollAction {
  type: PollsActionsTypes;
  payload: Poll | UserVote;
}
