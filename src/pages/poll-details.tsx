import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Question } from "../components/question";
import { Poll } from "../types/poll";
import { NotFound } from "./not-found";

interface PollDetailsParams {
  id: string;
}

export const PollDetails = () => {
  const { id } = useParams<PollDetailsParams>();
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);
  const [poll, setPoll] = useState<Poll | undefined | null>(undefined);

  useEffect(() => {
    const question = polls.find((p: Poll, _) => p.id === id);
    if (question) {
      setPoll(question);
    } else {
      setPoll(null);
    }
  }, [id, polls]);

  return poll === null ? (
    <NotFound />
  ) : poll ? (
    <div className="panel" style={{ border: "none" }}>
      <Question poll={poll} showDetails={true} />
    </div>
  ) : (
    <div />
  );
};
