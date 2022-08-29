import React, { Component } from 'react';
import './App.css';
import BoxContainer from './BoxContainer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BoxContainer />
      </div>
    );
  }
}
