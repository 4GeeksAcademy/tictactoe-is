import React, { useState } from 'react';

function StartScreen({ onStart }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleStart = (symbol) => {
    if (player1 && player2) {
      onStart(player1, player2, symbol);
    } else {
      alert("Please enter both usernames!");
    }
  };

  return (
    <div>
      <h1>Tic Tac Toe in React.js</h1>
      <h2>Pick A Weapon</h2>
      <div style={{ background: '#333', padding: '20px', display: 'inline-block' }}>
        <h3>CHOOSE YOUR WEAPON</h3>
        <input
          placeholder="Player 1 username"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          placeholder="Player 2 username"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => handleStart('X')}>X</button>
          <button onClick={() => handleStart('O')}>O</button>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
