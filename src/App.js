import React, { useState } from 'react';
import Buttons from './Buttons';
import './style.css';

function App() {
  const [PlayerMove, setPlayerMove] = useState('');
  const [ComputerMove, setComputerMove] = useState('');
  const [computerscore, setcomputerscore] = useState(0);
  const [playerscore, setplayerscore] = useState(0);

  const handleClick = (event) => {
    const array = ['Rock', 'Paper', 'Scissor'];
    const computernum = Math.floor(Math.random() * 3);
    const CurrentMove = event.target.innerText;
    const computerChoice = array[computernum];

    setComputerMove(computerChoice);
    setPlayerMove(CurrentMove);

    const result = Winner(computerChoice, CurrentMove);

    if (result === 'Computer Wins') {
      setcomputerscore((prev) => prev + 1);
    } else if (result === 'Player Wins') {
      setplayerscore((prev) => prev + 1);
    }
  };

  const Winner = (computerMove, playerMove) => {
    if (
      (computerMove === 'Rock' && playerMove === 'Scissor') ||
      (computerMove === 'Scissor' && playerMove === 'Paper') ||
      (computerMove === 'Paper' && playerMove === 'Rock')
    ) {
      return 'Computer Wins';
    } else if (
      (playerMove === 'Rock' && computerMove === 'Scissor') ||
      (playerMove === 'Scissor' && computerMove === 'Paper') ||
      (playerMove === 'Paper' && computerMove === 'Rock')
    ) {
      return 'Player Wins';
    } else if (playerMove === computerMove) {
      return 'Draw';
    }
    return '';
  };

  return (
    <>
      <div className="Container">
      <div className="content">
      <h1>Rock Paper Scissors</h1>
        <p>Player Move: {PlayerMove}</p>
        <p>Computer Move: {ComputerMove}</p>
        <p>Player Score: {playerscore}</p>
        <p>Computer Score: {computerscore}</p>
      
      <Buttons handleClick={handleClick} />
      </div>
      </div>
    </>
  );
}

export default App;
