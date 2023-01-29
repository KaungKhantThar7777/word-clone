import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  const handleAddGuess = (guess) => {
    const nextGuesses = [
      ...guessResults,
      {
        guess,
        id: Math.random(),
      },
    ];

    setGuessResults(nextGuesses);
  };
  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessForm handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
