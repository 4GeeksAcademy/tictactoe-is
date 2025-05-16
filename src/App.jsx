import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameBoard from './components/GameBoard';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [playerSymbol, setPlayerSymbol] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (p1, p2, symbol) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setPlayerSymbol(symbol);
    setGameStarted(true);
  };

  const handleReset = () => {
    setPlayer1('');
    setPlayer2('');
    setPlayerSymbol('');
    setGameStarted(false);
  };

  return (
    <div className="app" style={{ textAlign: 'center', paddingTop: '50px' }}>
      {gameStarted ? (
        <GameBoard
          player1={player1}
          player2={player2}
          playerSymbol={playerSymbol}
          onReset={handleReset}
        />
      ) : (
        <StartScreen onStart={handleStartGame} />
      )}
    </div>
  );
}

export default App;
