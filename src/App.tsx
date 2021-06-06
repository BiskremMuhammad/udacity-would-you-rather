import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { store } from "./redux/store";
import { UserContext, Context } from "./context/user-context";
import { Home } from "./pages/home";
import { User } from "./types/user";
import { Login } from "./pages/login";
import { Nav } from "./components/nav";
import { _getUsers } from "./api/__DATA__";

import "./App.css";
import { AddQuestion } from "./pages/add-question";
import { PollDetails } from "./pages/poll-details";
import { Leaderboard } from "./pages/leaderboard";

function App() {
  const [listOfUsers, setListOfUsers] = useState<User[]>([]);
  const [state, setState] = useState<Context>({ user: undefined });

  useEffect(() => {
    const fetchUsers = async () => {
      const preDefinedUsers: User[] = await _getUsers();
      setListOfUsers(preDefinedUsers);
    };

    fetchUsers();
  }, []);

  const onLogin = (user: User) => {
    setState({ user });
  };

  const onLogout = () => {
    setState({ user: undefined });
  };

  return (
    <Provider store={store}>
      <UserContext.Provider value={state}>
        <BrowserRouter>
          <Nav onLogout={onLogout} />
          <main>
            <Switch>
              {!state.user && (
                <Route
                  exact
                  path="/login"
                  render={() =>
                    !listOfUsers.length ? (
                      <h3>Loading...</h3>
                    ) : (
                      <Login users={listOfUsers} onLogin={onLogin} />
                    )
                  }
                />
              )}
              {!state.user && <Redirect to="login" />}
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddQuestion} />
              <Route
                exact
                path="/leaderboard"
                render={() => <Leaderboard users={listOfUsers} />}
              />
              <Route path="/question/:id" component={PollDetails} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
