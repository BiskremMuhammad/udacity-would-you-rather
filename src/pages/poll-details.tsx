import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Question } from "../components/question";
import { Poll } from "../types/poll";

interface PollDetailsParams {
  id: string;
}

export const PollDetails = () => {
  const { id } = useParams<PollDetailsParams>();
  const history = useHistory();
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);
  const [poll, setPoll] = useState<Poll>();

  useEffect(() => {
    const question = polls.find((p: Poll, _) => p.id === id);
    if (question) {
      setPoll(question);
    } else {
      history.push("/");
    }
  }, [id, polls]);

  return poll ? (
    <div className="panel" style={{ border: "none" }}>
      <Question poll={poll} showDetails={true} />
    </div>
  ) : (
    <div />
  );
};
