import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
 Row,Col
} from 'reactstrap';

export default class ProjectRows extends Component {

  render() {
    return (
      // <div className="w3-row-padding">
      //   {this.props.children}
      // </div>
      <Row className="mb-3">
        {this.props.children}
      </Row>
    );
  }
}
