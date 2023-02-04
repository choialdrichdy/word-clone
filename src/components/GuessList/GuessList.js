import { range } from "../../utils";
import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess) => (
        <Guess key={guess} guess={guessList[guess]} />
      ))}
    </div>
  );
}

export default GuessList;
