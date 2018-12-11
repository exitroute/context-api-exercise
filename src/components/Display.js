import React, { Component } from 'react'
import { MyContext } from '../context';

/* 
* USE this component to DISPLAY ALL
* X Import CONTEXT 
* X Wrap context.state.x y and z in <MyContext.Consumer>
*/

export default class Display extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {/* child of consumer is always a function */}
        {
          (context) => (
            <div>
              <h2>Display</h2>
              <p>
                Outputs context.state.x .y <strong>and </strong>.z<br />
                x = {context.state.x}<br />
                y = {context.state.y}<br />
                z = {context.state.z}
              </p>
            </div>
          )
        }
      </MyContext.Consumer>
    )
  }
}
