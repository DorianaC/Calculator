import React from 'react';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import './App.css';

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className="App">
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}
