import React, { useState } from 'react';

function StartScreen({ onStartGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleChooseSymbol = (symbol) => {
    console.log("Jugador 1:", player1);
    console.log("Jugador 2:", player2);
    console.log("Símbolo elegido:", symbol);
    onStartGame(player1, player2, symbol);
  };

  return (
    <div>
      <h2>Pick A Weapon</h2>
      <p>CHOOSE YOUR WEAPON</p>
      <input
        type="text"
        placeholder="Jugador 1 username"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        style={{ margin: '5px', padding: '5px' }}
      />
      <input
        type="text"
        placeholder="Jugador 2 username"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        style={{ margin: '5px', padding: '5px' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleChooseSymbol('X')} style={{ margin: '10px', fontSize: '30px' }}>❌</button>
        <button onClick={() => handleChooseSymbol('O')} style={{ margin: '10px', fontSize: '30px' }}>⭕</button>
      </div>
    </div>
  );
}

export default StartScreen;
