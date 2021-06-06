import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/user-context";
import { saveVote } from "../redux/thunky-actions";
import { Poll } from "../types/poll";

interface QuestionProps {
  poll: Poll;
  showDetails?: boolean;
}

export const Question = ({ poll, showDetails }: QuestionProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);
  const [answer, setAnswer] = useState<string>("");

  const onSelectAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const onSubmitAnswer = async () => {
    if (!answer.length) {
      return;
    }
    await dispatch(
      saveVote({
        user: user!.id,
        poll: poll.id,
        answer: answer === poll.optionA ? "A" : "B",
      })
    );
  };

  const opationAVotes: number = poll.optionAVoters.length;
  const opationBVotes: number = poll.optionAVoters.length;

  return (
    <div className="question">
      <div className="header">{`${poll.author.name} Says:`}</div>
      <div className="body">
        <div className="avatar">
          <img src={poll.author!.avatar} alt={poll.author.name} />
        </div>
        <div className="details">
          {showDetails ? (
            poll.optionAVoters.includes(user!.id) ||
            poll.optionBVoters.includes(user!.id) ? (
              <>
                <h2>Results:</h2>
                <div
                  className={`answer${
                    poll.optionAVoters.includes(user!.id) ? " selected" : ""
                  }`}
                >
                  {poll.optionAVoters.includes(user!.id) && (
                    <div className="badge">Your vote</div>
                  )}
                  <h5>{poll.optionA}</h5>
                  <div className="option-progress">
                    <div
                      className="progress"
                      style={{
                        width: `${
                          (opationAVotes / (opationAVotes + opationBVotes)) *
                          100
                        }%`,
                      }}
                    >
                      <span>
                        {Number(
                          (
                            opationAVotes /
                            (opationAVotes + opationBVotes)
                          ).toFixed(2)
                        ) * 100}
                        %
                      </span>
                    </div>
                  </div>
                  <div className="votes">{`${opationAVotes} out of ${
                    opationAVotes + opationBVotes
                  } votes`}</div>
                </div>
                <div
                  className={`answer${
                    poll.optionBVoters.includes(user!.id) ? " selected" : ""
                  }`}
                >
                  {poll.optionBVoters.includes(user!.id) && (
                    <div className="badge">Your vote</div>
                  )}
                  <h5>{poll.optionB}</h5>
                  <div className="option-progress">
                    <div
                      className="progress"
                      style={{
                        width: `${
                          (opationBVotes / (opationAVotes + opationBVotes)) *
                          100
                        }%`,
                      }}
                    >
                      <span>
                        {Number(
                          (
                            opationBVotes /
                            (opationAVotes + opationBVotes)
                          ).toFixed(2)
                        ) * 100}
                        %
                      </span>
                    </div>
                  </div>
                  <div className="votes">{`${opationBVotes} out of ${
                    opationAVotes + opationBVotes
                  } votes`}</div>
                </div>
              </>
            ) : (
              <>
                <h2>Would You Rather ...</h2>
                <div className="radio">
                  <input
                    id="optionA"
                    type="radio"
                    value={poll.optionA}
                    onChange={onSelectAnswer}
                    checked={answer === poll.optionA}
                  />
                  <label htmlFor="optionA">{poll.optionA}</label>
                </div>
                <div className="radio">
                  <input
                    id="optionB"
                    type="radio"
                    value={poll.optionB}
                    onChange={onSelectAnswer}
                    checked={answer === poll.optionB}
                  />
                  <label htmlFor="optionB">{poll.optionB}</label>
                </div>
                <button onClick={onSubmitAnswer}> Submit </button>
              </>
            )
          ) : (
            <>
              <h3>Would you rather</h3>
              <p>
                {poll.optionAVoters >= poll.optionBVoters
                  ? poll.optionA
                  : poll.optionB}
              </p>
              <Link to={`/question/${poll.id}`}>View Poll</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
