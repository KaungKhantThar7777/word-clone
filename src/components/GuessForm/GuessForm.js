import React from "react";

function GuessForm() {
  const [guessInput, setGuessInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ guessInput });
    setGuessInput("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessInput}
        onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessForm;
