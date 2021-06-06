import React from "react";
import { useSelector } from "react-redux";
import { Poll } from "../types/poll";
import { User } from "../types/user";

export const UserInfo = ({ id, avatar, name }: User) => {
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);

  const answers: number = polls.reduce((acc: number, val: Poll) => {
    if (val.optionAVoters.includes(id) || val.optionBVoters.includes(id)) acc++;
    return acc;
  }, 0);
  const askedQuestions: number = polls.reduce((acc: number, val: Poll) => {
    if (val.author.id === id) acc++;
    return acc;
  }, 0);

  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} alt={name} />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <div className="metrics">
          <p>
            <span>Answered questions</span>
            <span>{answers}</span>
          </p>
          <p>
            <span>Created questions</span>
            <span>{askedQuestions}</span>
          </p>
        </div>
      </div>
      <div className="score">
        <div className="score-title">Score</div>
        <div className="score-value">
          <span>{answers + askedQuestions}</span>
        </div>
      </div>
    </div>
  );
};
