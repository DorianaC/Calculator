import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from './../logic/calculate'
import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonText => {
    this.setState(calculate(this.state, buttonText));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <Display value={ next || total || 0 } />
        <ButtonPannel clickHandler={this.handleClick} />
      </div>
    );
  }
}