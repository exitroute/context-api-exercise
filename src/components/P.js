import React, { Component } from 'react';
import Q from "./Q";

export default class P extends Component {
  render() {
    return (
      <div>
      <h2>Component P</h2>
      Component P contains Component Q
      <Q />
    </div> 
    );
  }
} 