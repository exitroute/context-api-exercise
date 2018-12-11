import React, { Component, Fragment } from 'react';
import { MyContext } from "../context";
/* 
* Use for BUTTONS
*   Import CONTEXT 
*   Wrap <buttons>  in <MyContext.Consumer> 
*   and set onClick to context.incrementX 
*/

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {
            (context) => (
              <Fragment>
              <h2>Buttons</h2>
              <p>
                Buttons contains four Components with each button
                </p>
              <ul>
                <li>
                  <button onClick={context.incrementX}>incrementX</button>
                </li>
                <li>
                  <button onClick={context.decrementY}>decrementY</button>
                </li>
                <li>
                  <button onClick={context.multiplyZ}>multiplyZ by Y</button>
                </li>
                <li>
                  <button onClick={context.divideZ}>divideZ by X</button>
                </li>
              </ul>
              </Fragment>
            )}
        </MyContext.Consumer>
      </div>
    )
  }
}
