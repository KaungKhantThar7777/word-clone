import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(({ id, guess }) => (
        <Guess key={id} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
