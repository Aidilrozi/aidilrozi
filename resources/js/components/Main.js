import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Projects from './Projects';
import ProjectRows from './ProjectRows';
import About from './About';
import ContactForm from './ContactForm';
require('../bootstrap');
class Main extends Component {

constructor(props){
    super(props);
    this.state = {
        projectLists: []
    };
}

componentDidMount(){
    const reactThis = this;
    fetch('http://portfolio.test/projects')
    .then((response) => {
        if(response.status != 200){
             console.log('api failed',response.status);
             return;
        }
        return response.json();
    })
    .then((result) =>{
        reactThis.setState({ projectLists:result});
    })
    .catch((err) => {
        console.log('some error occured',err);
    })
}

  render() {
    const Fragment = React.Fragment;
    const rowSize = 2;
    let projectsInfo = {};
    let projectsData = this.state.projectLists.map((project)=>{
        projectsInfo = {
            thumbnail : project.thumbnail,
            title: project.info
        };
        return <Projects key={project.id} info = {projectsInfo}/>
    })
    .reduce((r,element,index) =>{
        index % rowSize ===0 && r.push([]);
        r[r.length-1].push(element);
        return r; // [[elem,elem....],[]]
    },[])
    .map((result,index )=>{
        return <ProjectRows>{result}</ProjectRows>
    })
    return (
       <Fragment>
            {projectsData}
       </Fragment>
       
    );
  }
}


if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
if (document.getElementById('contact-form')) {
    ReactDOM.render(<ContactForm />, document.getElementById('contact-form'));
}
