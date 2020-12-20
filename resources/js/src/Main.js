import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'reactstrap';
import Particles from 'react-particles-js';

import Layout from './layouts/Layout.js'
import LayoutMaster from './layouts/LayoutMaster.js'
import "../style/style.css";

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

  }
};

class Main extends Component {

constructor(props){
    super(props);
    this.state = {
         isOpen: false
    };
}    


  render() {
    return (  
        <div style={styles.root}>
            <Particles 
            height={window.outerHeight}
            />
        </div>
        
    );
  }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
if (document.getElementById('wrapper')) {
    ReactDOM.render(<LayoutMaster />, document.getElementById('wrapper'));
}


