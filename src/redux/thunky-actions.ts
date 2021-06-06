import { Dispatch } from "react";
import { _saveQuestion, _saveQuestionAnswer } from "../api/__DATA__";
import { Poll } from "../types/poll";
import {
  PollAction,
  PollsActionsTypes,
  UserVote,
} from "./actions/polls-actions";

export const saveQuestion =
  (question: Poll) => (dispatch: Dispatch<PollAction>) => {
    return _saveQuestion(question)
      .then((q: Poll) =>
        dispatch({
          type: PollsActionsTypes.ADD_QUESTION,
          payload: q,
        })
      )
      .catch((er) => {
        console.log("couldn't add a new question", er);
      });
  };

export const saveVote =
  (vote: UserVote) => (dispatch: Dispatch<PollAction>) => {
    return _saveQuestionAnswer(vote)
      .then((q: Poll) =>
        dispatch({
          type: PollsActionsTypes.VOTE,
          payload: q,
        })
      )
      .catch((er) => {
        console.log("couldn't add a new question", er);
      });
  };
