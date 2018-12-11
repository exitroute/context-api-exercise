import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { MyProvider, MyContext } from './context';
import B from './components/B';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {/* child of consumer is always a function */}
          {
            (context) => (
              <div>
                <ul>
                  <li>The App.js contains Component B </li>
                  <li>It also has a fuction that takes context as an argument</li>
                  <li>
                    console.logging from here
                  {console.log(
                    "./App.js <MyProvider <MyContext.Consumer> > arrg context: ", 
                    context
                  )}
                  </li>
                </ul>
                <button onClick={context.incrementX}>incrementX</button>
                <B />
              </div>
            )
          }
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
