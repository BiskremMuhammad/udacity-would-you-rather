import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { Poll } from "../types/poll";

export const Question = (poll: Poll) => {
  const { user } = useContext(UserContext);

  return (
    <div className="question">
      <div className="header">Someone Says:</div>
      <div className="body">
        <div className="avatar">
          <img src={user!.avatar} />
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
