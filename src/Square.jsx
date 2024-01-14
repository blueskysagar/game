import React, { useState } from "react";
import "./style.css";

function TicTacToe() {
  return (
    <div>
      <Board />
    </div>
  );
}

function Square(props) {
  return (
    <button className="Square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board() {
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (index) => {
    const squares = [...boardSquares];
    if (squares[index]) return;
    squares[index] = xIsNext ? "X" : "O";
    setBoardSquares(squares);
    setxIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    return <Square value={boardSquares[index]} onClick={() => handleClick(index)} />;
  };

  let status = `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <h1 className="status">{status}</h1>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default TicTacToe;
