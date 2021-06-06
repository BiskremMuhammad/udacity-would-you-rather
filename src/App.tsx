import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { store } from "./redux/store";
import { UserContext, Context } from "./context/user-context";
import { Home } from "./pages/home";

import "./App.css";
import { User } from "./types/user";
import { Login } from "./pages/login";
import { Nav } from "./components/nav";

function App() {
  const [state, setState] = useState<Context>({ user: undefined });

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
          <Nav />
          <main>
            <Switch>
              {!state.user && (
                <Route exact path="/login" render={() => <Login />} />
              )}
              {!state.user && <Redirect to="login" />}
              <Route exact path="/" component={Home} />
            </Switch>
          </main>
        </BrowserRouter>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
