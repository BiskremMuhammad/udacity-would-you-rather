import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user-context";

export const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="nav">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className="item" to="/add">
          New Question
        </Link>
        <Link className="item" to="/leaderboard">
          Leaderboard
        </Link>
        {user ? (
          <>
            <span className="item">Hello Logged in user</span>
            <Link className="item" to="/signin">
              Logout
            </Link>
          </>
        ) : (
          <Link className="item" to="/login">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
