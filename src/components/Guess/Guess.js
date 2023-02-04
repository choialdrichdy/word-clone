import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess &&
        guess.map((letter, index) => (
          <span key={index} className={`cell ${letter.status}`}>
            {letter.letter}
          </span>
        ))}
      {!guess && (
        <>
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
          <span className="cell" />
        </>
      )}
    </p>
  );
}

export default Guess;
