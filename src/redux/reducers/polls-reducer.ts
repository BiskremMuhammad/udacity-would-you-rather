import { Poll } from "../../types/poll";
import {
  PollAction,
  PollsActionsTypes,
  UserVote,
} from "../actions/polls-actions";

export const pollsReducer = (state: Poll[] = [], action: PollAction) => {
  switch (action.type) {
    case PollsActionsTypes.LOAD_QUESTIONS:
      return [...(action.payload as Poll[])];

    case PollsActionsTypes.ADD_QUESTION:
      return [...state, action.payload as Poll];

    case PollsActionsTypes.VOTE:
      const pollId: string = (action.payload as Poll).id;
      const updatedPolls: Poll[] = state.map<Poll>((p: Poll, _) => {
        if (p.id === pollId) {
          return { ...(action.payload as Poll) };
        }
        return p;
      });
      return updatedPolls;

    default:
      return state;
  }
};
