import React from "react";

function Guess({ guess }) {
  const cells = guess ? [...guess] : Array(5).fill("");
  return (
    <p className="guess">
      {cells.map((alphabet, i) => (
        <span key={`${alphabet} ${i}`} className="cell">
          {alphabet}
        </span>
      ))}
    </p>
  );
}

export default Guess;
