import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'reactstrap';
import Layout from './Layout.js';
import Intro from './Intro';

export default class LayoutMaster extends Component {

  render() {
    return (
      <Layout>
         <Intro/> 
      </Layout>
    );
  }
}
