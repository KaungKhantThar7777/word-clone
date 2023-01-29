import React from "react";

function Guess({ guess, checkStatus }) {
  console.log({ guess, checkStatus });
  const cells = guess ? [...guess] : Array(5).fill("");
  return (
    <p className="guess">
      {cells.map((letter, i) => (
        <span
          key={`${letter} ${i}`}
          className={`cell ${checkStatus ? checkStatus[i].status : ""}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
