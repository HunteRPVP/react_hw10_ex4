import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./historyAPI/HomePage";
import GamePage from "./historyAPI/GamePage";
import WinnerPage from "./historyAPI/WinnerPage";

const HistoryAPI = () => {
  return (
    <BrowserRouter>
      <div></div>
      <Route exact path="/historyAPI" component={HomePage} />
      <Route exact path="/historyAPI/game" component={GamePage} />
      <Route exact path="/historyAPI/winner" component={WinnerPage} />
    </BrowserRouter>
  );
};

export default HistoryAPI;
