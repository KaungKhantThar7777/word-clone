import React from "react";

function GuessForm({ handleAddGuess, isGameOver }) {
  const [guessInput, setGuessInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guessInput.length === 5) {
      handleAddGuess(guessInput);
      setGuessInput("");
    }
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        disabled={isGameOver}
        onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessForm;
