import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const GamePage = () => {
  const [guess, setGuess] = useState("");
  const history = useHistory();
  console.log(history);

  const handleGuess = () => {
    if (guess === "chocolate") {
      history.push("/historyAPI/winner");
    }
  };
  return (
    <div>
      <h1>GamePage</h1>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="text"
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
};

export default GamePage;
