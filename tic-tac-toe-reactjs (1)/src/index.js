import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Game} from "./Square";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
          <Game/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
