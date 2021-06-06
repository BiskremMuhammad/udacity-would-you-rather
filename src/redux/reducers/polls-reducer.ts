import { Poll } from "../../types/poll";
import {
  PollAction,
  PollsActionsTypes,
  UserVote,
} from "../actions/polls-actions";

export const pollsReducer = (state: Poll[] = [], action: PollAction) => {
  switch (action.type) {
    case PollsActionsTypes.ADD_QUESTION:
      return [...state, action.payload as Poll];

    case PollsActionsTypes.VOTE_FOR_OPTION_A:
    case PollsActionsTypes.VOTE_FOR_OPTION_B:
      const vote: UserVote = action.payload as UserVote;
      const newState: Poll[] = state.map<Poll>((p: Poll, _) => {
        if (p.id === vote.poll) {
          return {
            ...p,
            optionAVoters:
              action.type === PollsActionsTypes.VOTE_FOR_OPTION_A
                ? [...p.optionAVoters, vote.user]
                : [...p.optionAVoters],
            optionBVoters:
              action.type === PollsActionsTypes.VOTE_FOR_OPTION_B
                ? [...p.optionBVoters, vote.user]
                : [...p.optionBVoters],
          };
        }
        return p;
      });
      return newState;

    default:
      return state;
  }
};
