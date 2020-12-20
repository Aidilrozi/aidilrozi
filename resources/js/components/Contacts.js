import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
 Alert
} from 'reactstrap';

export default class Contacts extends Component {

  render() {
    return (
      <>
    <div className="w3-col l3 m6 w3-margin-bottom"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    >
     
      <img src={this.props.info.thumbnail} alt={this.props.info.name}  style={{"width":"100%"}}/>
      <h3>{this.props.info.name}</h3>
      <p className="w3-opacity">{this.props.info.designation}</p>
      <p>{this.props.info.about}</p>
      <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>

  </>
    );
  }
}
