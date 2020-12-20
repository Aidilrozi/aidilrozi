import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Col
} from 'reactstrap';
// initialization
AOS.init();

export default class Projects extends Component {

  render() {
    return (
  //  <div className="w3-col l3 m6 w3-margin-bottom"    
  //   data-aos="fade-up"
  //   data-aos-offset="400"
  //   data-aos-delay="50"
  //   data-aos-duration="1000"
  //  >
  //     <div className="w3-display-container">
  //       <div className="w3-display-topleft w3-black w3-padding">{this.props.info.title}</div>
  //       <img src={this.props.info.thumbnail} alt={this.props.info.title} style={{"width":"100%"}}/>
  //     </div>
  //   </div>

      <div className="col"
      data-aos="fade-up"
      data-aos-offset="400"
      data-aos-delay="50"
      data-aos-duration="1000"
      >
      <Card>
        <CardImg top width="100%" src={this.props.info.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{this.props.info.title}</CardTitle>
          {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">View Demo</Button>
          
        </CardBody>
      </Card>
    </div>
    );
  }
}
