import React, { Component } from 'react';

import './App.css';
import { MyProvider } from './context';

import Display from "./components/Display";
import Buttons from './components/Buttons';

class App extends Component {
  render() {
    return (
      <MyProvider>
            <h2>The App.js contains Button and Display </h2>
          <Buttons />
          <Display />
      </MyProvider>
    );
  }
}

export default App;
