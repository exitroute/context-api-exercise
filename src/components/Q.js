import React, { Component } from 'react';
import { MyContext } from "../context.js";

export default class Q extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          (context) => (
            <div>
              <h2>Component Q</h2>
              <p>
                Component Q outputs context.state.y<br />
                y = {context.state.y}
              </p>
            </div>
          )
        }
      </ MyContext.Consumer>
    )
  }
}