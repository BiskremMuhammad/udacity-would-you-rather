import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user-context";

interface NavProps {
  onLogout: () => void;
}

export const Nav = ({ onLogout }: NavProps) => {
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
            <span className="item">
              <img src={user.avatar} alt={user.name} /> Hello {user.name}
            </span>
            <button className="item" onClick={onLogout}>
              Logout
            </button>
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
