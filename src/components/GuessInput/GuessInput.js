import React from "react";

function GuessInput({ submitGuess, disabled }) {
  const emptyGuess = { guess: "" };
  const [guess, setGuess] = React.useState(emptyGuess);

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.guess.length < 5) {
      return;
    }
    submitGuess(guess);
    setGuess(emptyGuess);
  }

  function handleChange(value) {
    setGuess({ guess: value.toUpperCase() });
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        required={true}
        disabled={disabled ? true : false}
        value={guess.guess}
        onChange={(event) => handleChange(event.target.value)}
      />
    </form>
  );
}

export default GuessInput;
