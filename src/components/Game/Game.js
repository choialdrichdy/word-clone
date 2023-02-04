import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("");

  function submitGuess(guess) {
    if (guessList.length === 6) {
      return;
    }
    const nextGuessList = [...guessList];
    const guessResult = checkGuess(guess.guess, answer);
    nextGuessList.push(guessResult);
    checkGame(guessResult);
    setGuessList(nextGuessList);
  }

  function checkGame(guessResult) {
    console.log(guessResult);
    if (guessResult.every((result) => result.status === "correct")) {
      setStatus("win");
    } else if (guessList.length === 5) {
      setStatus("lose");
    }
  }
  return (
    <>
      <GuessList guessList={guessList} />
      <GuessInput submitGuess={submitGuess} disabled={status} />
      {status === "win" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessList.length} guesses</strong>.
          </p>
        </div>
      )}
      {status === "lose" && (
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
