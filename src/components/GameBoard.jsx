import React, { useState } from 'react';

function GameBoard({ player1, player2, onReset }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  function checkWinner(b) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b_, c] of lines) {
      if (b[a] && b[a] === b[b_] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setGameOver(true);
      setWinner(result);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
      setWinner('Draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }

  function renderSquare(i) {
    return (
      <div
        onClick={() => handleClick(i)}
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#666',
          margin: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 32,
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {board[i]}
      </div>
    );
  }

  function getWinnerName() {
    if (winner === 'X') return player1;
    if (winner === 'O') return player2;
    return null;
  }

  return (
    <div>
      <h2>
        {gameOver
          ? winner === 'Draw'
            ? '¡Empate!'
            : `Ganó: ${getWinnerName()} (${winner})`
          : `Turno de ${currentPlayer === 'X' ? player1 : player2} (${currentPlayer})`}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: 270, margin: 'auto' }}>
        {board.map((_, i) => renderSquare(i))}
      </div>
      {gameOver && (
        <button onClick={onReset} style={{ marginTop: '20px' }}>
          Volver a jugar
        </button>
      )}
    </div>
  );
}

export default GameBoard;
