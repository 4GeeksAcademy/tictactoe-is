import React, { useState } from 'react';

function GameBoard({ player1, player2, symbol, onRestart }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');

  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);
    console.log(`Casilla ${index} marcada con ${currentTurn}`);
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
  };

  const renderSquare = (index) => (
    <div
      onClick={() => handleClick(index)}
      style={{
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #999',
        fontSize: '40px',
        cursor: 'pointer'
      }}
    >
      {board[index]}
    </div>
  );

  return (
    <div>
      <h2>It is {currentTurn} turn!</h2>
      <button onClick={onRestart}>Start Over</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 80px)',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        {board.map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
}

export default GameBoard;
