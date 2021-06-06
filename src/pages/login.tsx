import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PanelTitle } from "../components/panel-title";
import { User } from "../types/user";

interface LoginProps {
  onLogin: (user: User) => void;
  users: User[];
}

export const Login = ({ users, onLogin }: LoginProps) => {
  const [user, setUser] = useState<User>();
  const history = useHistory();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) {
      return;
    }
    onLogin(user);
    history.push("/");
  };

  const selectUser = (id: string) => {
    setUser(users.find((u) => u.id === id));
  };

  return (
    <div className="panel">
      <PanelTitle title="Welcome to the Would you Rather App !" />
      <form className="panel-body" onSubmit={handleLogin}>
        <div className="react-redux-icon"></div>
        <h2 className="center"> Signin</h2>

        <select
          onChange={(e) => selectUser(e.target.value)}
          value={user ? user.id : ""}
        >
          <option value="" disabled>
            Select User
          </option>
          {users.map((u: User, _) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <button> Submit </button>
      </form>
    </div>
  );
};
