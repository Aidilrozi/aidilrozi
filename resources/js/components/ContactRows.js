import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class ContactRows extends Component {

  render() {
    return (
   <div className="w3-row-padding w3-grayscale">
        {this.props.children}
   </div>
    );
  }
}