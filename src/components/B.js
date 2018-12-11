import React, { Component } from 'react'
import C from './C';

export default class B extends Component {
  render() {
    return (
      <div>
        <h2>Component B</h2>
        Component B contains Component C
        <C />
      </div> 
    )
  }
}
