import React, { useState } from "react";
import "./style.css";
function TicTacToe(){
  return(
    <div>
    <Board/>
      </div>
  );
}

function Square(props){
  return(
  <button className="Square" onClick={props.onClick}>{props.value}</button>
  );
}
 function Board(){
      // board State
      const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
      // turn State
      const [xIsNext, setxIsNext] = useState(true);
      //handleClick
      const handleClick = index =>{
        //copy of our board state
        const squares = [...boardSquares]
        //if the index of the board is filled, return 
        if (squares[index]) return
        //add X or 0
        squares[index] = xIsNext ? "X" : "0";
        //calculate the next turn
        //calculate the state of the board
       
        setBoardSquares(squares);
        //calculate the state of the state
        
        setxIsNext(!setxIsNext);
      };
 }
 //create our board
      
 // create a render square functions
const renderSquare = (index) =>{
        return <Square value={boardSquares[index]} onClick= {( )=>handleClick[index]}/>
      
      //taking index
        let status;
         status='Next player: ${xIsNext ? "X":"0"}';
      //return square with correct values and functions
      
     
      }
      
      return 
      (
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquares[0]}
          {renderSquares[1]}
          {renderSquares[2]}
        </div>
        <div className="board-row">
           {renderSquares[3]}
          {renderSquares[4]}
          {renderSquares[5]}
        </div>
        <div className="board-row">
      {renderSquares[6]}
    {renderSquares[7]}
    {renderSquares[8]}
    </div>
    </div>
      );
    
    // function to calculate the winner

    