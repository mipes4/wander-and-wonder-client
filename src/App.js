import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Game from "./pages/GamePage";
import Welcome from "./pages/Welcome";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getPlayerWithStoredToken } from "./store/player/actions";
import Scoreboard from "./pages/Scoreboard";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getPlayerWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/game" component={Game} />
        <Route path="/scoreboard" component={Scoreboard} />
      </Switch>
      <div className="footer"></div>
    </div>
  );
}

export default App;
