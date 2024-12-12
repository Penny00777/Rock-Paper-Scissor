// Buttons.jsx
import React from 'react';

function Buttons({ handleClick }) {
  return (
    <>
    <div className="btn">
      <button onClick={handleClick} className="button">Rock</button>
      <button onClick={handleClick} className="button">Paper</button>
      <button onClick={handleClick} className="button">Scissors</button>
      </div>
    </>
  );
}

export default Buttons;
