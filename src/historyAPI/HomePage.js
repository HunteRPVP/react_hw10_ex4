import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/historyAPI/game">Let's play a game</Link>
    </div>
  );
};

export default HomePage;
