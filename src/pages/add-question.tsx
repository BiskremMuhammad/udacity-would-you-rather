import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { PanelTitle } from "../components/panel-title";
import { UserContext } from "../context/user-context";
import { saveQuestion } from "../redux/thunky-actions";
import { Poll } from "../types/poll";
import { generateUID } from "../utils/uuid";

export const AddQuestion = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState<Poll>({
    id: generateUID(),
    author: user!,
    createdAt: new Date(Date.now()),
    optionA: "",
    optionAVoters: [],
    optionB: "",
    optionBVoters: [],
  });

  const onChangeOptionA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setQuestion({ ...question, optionA: val });
  };

  const onChangeOptionB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value;
    setQuestion({ ...question, optionB: val });
  };

  const onSubmitQuestion = async () => {
    if (!question.optionA.length || !question.optionB.length) {
      return;
    }
    await dispatch(saveQuestion(question));
    history.push("/");
  };

  return (
    <div className="panel">
      <PanelTitle title="Create New Question" />
      <div className="panel-body">
        <label> Complete the question</label>
        <h2>Would You Rather...</h2>
        <input
          type="text"
          placeholder="Enter Option 1 Here"
          value={question.optionA}
          onChange={onChangeOptionA}
        />
        <div className="or-sep">
          <h4>OR</h4>
        </div>
        <input
          type="text"
          placeholder="Enter Option 2 Here"
          value={question.optionB}
          onChange={onChangeOptionB}
        />
        <br />
        <button onClick={onSubmitQuestion}> Submit </button>
      </div>
    </div>
  );
};
