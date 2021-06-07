import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { PanelTabs, QuestionTabs } from "../components/panel-tabs";
import { Question } from "../components/question";
import { UserContext } from "../context/user-context";
import { Poll } from "../types/poll";

export const Home = () => {
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);
  const [activeTab, setActiveTab] = useState<QuestionTabs>(
    QuestionTabs.UNANSWERED_QUESTIONS
  );
  const { user } = useContext(UserContext);

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
              .sort(
                (a: Poll, b: Poll) =>
                  b.createdAt.getTime() - a.createdAt.getTime()
              )
              .map((p: Poll, _) => <Question key={p.id} poll={p} />)
          : polls
              .filter(
                (p: Poll, _) =>
                  p.optionAVoters.includes(user!.id) ||
                  p.optionBVoters.includes(user!.id)
              )
              .sort(
                (a: Poll, b: Poll) =>
                  b.createdAt.getTime() - a.createdAt.getTime()
              )
              .map((p: Poll, _) => <Question key={p.id} poll={p} />)}
      </div>
    </div>
  );
};
