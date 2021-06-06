import React from "react";
import { Link } from "react-router-dom";
import { Poll } from "../types/poll";

export const Question = (poll: Poll) => {
  return (
    <div className="question">
      <div className="header">{`${poll.author.name} Says:`}</div>
      <div className="body">
        <div className="avatar">
          <img src={poll.author!.avatar} />
        </div>
        <div className="details">
          <h3>Would you rather</h3>
          <p>
            {poll.optionAVoters >= poll.optionBVoters
              ? poll.optionA
              : poll.optionB}
          </p>
          <Link to={`/question/${poll.id}`}>View Poll</Link>
        </div>
      </div>
    </div>
  );
};
