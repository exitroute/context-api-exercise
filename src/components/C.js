import React, { Component } from 'react'
import { MyContext } from '../context';

export default class C extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {/* child of consumer is always a function */}
        {
          (context) => (
            <div>
              <h2>Component C</h2>
              <p>
                Component C outputs context.state.x<br />
                x = {context.state.x}
              </p>
            </div>
          )
        }
      </MyContext.Consumer>
    )
  }
}
