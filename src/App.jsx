import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [playerSymbol, setPlayerSymbol] = useState('X');

  const handleStartGame = (p1, p2, symbol) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setPlayerSymbol(symbol);
    setGameStarted(true);
  };

  const handleRestart = () => {
    setGameStarted(false);
    setPlayer1('');
    setPlayer2('');
    setPlayerSymbol('X');
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '40px' }}>
      <h1>Tic Tac Toe in React.js</h1>
      {gameStarted ? (
        <GameBoard player1={player1} player2={player2} symbol={playerSymbol} onRestart={handleRestart} />
      ) : (
        <StartScreen onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
