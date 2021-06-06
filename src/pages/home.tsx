import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { _getQuestions } from "../api/__DATA__";
import { PanelTabs, QuestionTabs } from "../components/panel-tabs";
import { Question } from "../components/question";
import { UserContext } from "../context/user-context";
import { PollAction, PollsActionsTypes } from "../redux/actions/polls-actions";
import { Poll } from "../types/poll";

export const Home = () => {
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);
  const dispatch = useDispatch<Dispatch<PollAction>>();
  const [activeTab, setActiveTab] = useState<QuestionTabs>(
    QuestionTabs.UNANSWERED_QUESTIONS
  );
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await _getQuestions();
      dispatch({
        type: PollsActionsTypes.LOAD_QUESTIONS,
        payload: fetchedQuestions,
      });
    };

    fetchQuestions();
  }, []);

  return !polls.length ? (
    <h3>Loading...</h3>
  ) : (
    <div className="panel w-md">
      <PanelTabs activeTab={activeTab} onChangeTab={setActiveTab} />
      <div className="panel-body">
        {activeTab === QuestionTabs.UNANSWERED_QUESTIONS
          ? polls
              .filter(
                (p: Poll, _) =>
                  !p.optionAVoters.includes(user!.id) &&
                  !p.optionBVoters.includes(user!.id)
              )
              .map((p: Poll, _) => <Question {...p} />)
          : polls
              .filter(
                (p: Poll, _) =>
                  p.optionAVoters.includes(user!.id) ||
                  p.optionBVoters.includes(user!.id)
              )
              .map((p: Poll, _) => <Question {...p} />)}
      </div>
    </div>
  );
};
