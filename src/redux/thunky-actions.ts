import { Dispatch } from "react";
import { _saveQuestion } from "../api/__DATA__";
import { Poll } from "../types/poll";
import { PollAction, PollsActionsTypes } from "./actions/polls-actions";

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
