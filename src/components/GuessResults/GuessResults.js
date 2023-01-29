import React from "react";

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map(({ id, guess }) => (
        <p key={id} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
