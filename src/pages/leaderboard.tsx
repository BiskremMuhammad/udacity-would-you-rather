import React from "react";
import { useSelector } from "react-redux";
import { UserInfo } from "../components/user-info";
import { Poll } from "../types/poll";
import { User } from "../types/user";

interface LeaderboardProps {
  users: User[];
}

export const Leaderboard = ({ users }: LeaderboardProps) => {
  const polls: Poll[] = useSelector<Poll[], Poll[]>((store) => store);

  const sortedUsers = users.sort((a: User, b: User) => {
    const userA_answers: number = polls.reduce((acc: number, val: Poll) => {
      if (val.optionAVoters.includes(a.id) || val.optionBVoters.includes(a.id))
        acc++;
      return acc;
    }, 0);
    const userA_askedQuestions: number = polls.reduce(
      (acc: number, val: Poll) => {
        if (val.author.id === a.id) acc++;
        return acc;
      },
      0
    );
    const userB_answers: number = polls.reduce((acc: number, val: Poll) => {
      if (val.optionAVoters.includes(b.id) || val.optionBVoters.includes(b.id))
        acc++;
      return acc;
    }, 0);
    const userB_askedQuestions: number = polls.reduce(
      (acc: number, val: Poll) => {
        if (val.author.id === b.id) acc++;
        return acc;
      },
      0
    );

    return (
      userB_answers +
      userB_askedQuestions -
      (userA_answers + userA_askedQuestions)
    );
  });
  return (
    <div className="panel" style={{ border: "none" }}>
      <div className="leaderboard">
        {sortedUsers.map((u: User, _) => (
          <UserInfo key={u.id} {...u} />
        ))}
      </div>
    </div>
  );
};
