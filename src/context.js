import React, { Component } from 'react'

// 1st, make a new context
export const MyContext = React.createContext();

/*
* REDUCER function with state and action as arguments
* SWITCH statement with CASES for change to the state
* And RETURNS the UPDATED state
*
* Add a DISPATCH property to the STATE with  
* FUNCTION as a property 
* that SETsSTATE by Calling the REDUCER
*
* RETURN a <Provider> with a VALUE this.state
*/

// 2nd, create a provider component
export class MyProvider extends Component {

  state = {
    x: 0,
    y: 100,
    z: 50
  };
  // we return a context provider

  multiplyZ = () => {
    this.setState({
      z: this.state.z * this.state.y
    })
  }

  divideZ = () => {
    this.setState({
      z: this.state.z / this.state.x  
    })
  }


  render() {

    console.log("./context.js <MyProvider /> this.state: ", this.state);

    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider
        value={{ 
          state: this.state, 
          incrementX: () => {this.setState({x: this.state.x + 1})},
          decrementY: () => {this.setState({y: this.state.y - 1})},
          multiplyZ: this.multiplyZ,
          divideZ: this.divideZ
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
