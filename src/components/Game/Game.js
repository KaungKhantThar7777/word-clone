import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/GuessForm";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(() =>
    range(NUM_OF_GUESSES_ALLOWED).map(() => ({ guess: "", id: Math.random() }))
  );
  const [gameStatus, setGameStatus] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleAddGuess = (guess) => {
    const nextGuesses = [...guessResults];
    nextGuesses[activeIndex].guess = guess;
    nextGuesses[activeIndex].checkStatus = checkGuess(guess, answer);
    setActiveIndex(activeIndex + 1);
    setGuessResults(nextGuesses);

    if (guess === answer) {
      setGameStatus("success");
    } else if (activeIndex === 5) {
      setGameStatus("fail");
    }
  };
  return (
    <>
      <GuessResults guessResults={guessResults} />
      <GuessForm handleAddGuess={handleAddGuess} isGameOver={!!gameStatus} />

      {gameStatus === "success" && (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {activeIndex} guess{activeIndex > 1 ? "es" : ""}
            </strong>
            .
          </p>
        </div>
      )}

      {gameStatus === "fail" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
