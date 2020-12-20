import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header'
export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
