import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import TicTacToe from "./Square";

const App = () => {
  const [name] = useState('React');

    return (
      <>
          <TicTacToe/>
      </>
    );
}

render(<App />, document.getElementById('root'));
