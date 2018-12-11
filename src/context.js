import React, { Component } from 'react'

// 1st, make a new context
export const MyContext = React.createContext();

// 2nd, create a provider component
export class MyProvider extends Component {

  state = {
    x: 0,
    y: 100
  };
  // we return a context provider
  render() {

    console.log("./context.js <MyProvider /> this.state: ", this.state);

    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider
        value={{ 
          state: this.state, 
          incrementX: () => {this.setState({x: this.state.x + 1})},
          decrementY: () => {this.setState({y: this.state.y - 1})}
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
