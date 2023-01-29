import React from "react";
import Guess from "../Guess/Guess";

function GuessResults({ guessResults }) {
  console.log({ guessResults });
  return (
    <div className="guess-results">
      {guessResults.map(({ id, guess, checkStatus }) => (
        <Guess key={id} guess={guess} checkStatus={checkStatus} />
      ))}
    </div>
  );
}

export default GuessResults;
