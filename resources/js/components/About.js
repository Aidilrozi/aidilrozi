import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactRows from './ContactRows';
import Contacts from './Contacts';

export default class About extends Component {
constructor(props){
    super(props);
    this.state = { 
      contactList:[],
      aboutDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint" +
       "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
        "laboris nisi ut aliquip ex ea commodo consequat.",
    }
}
componentDidMount(){
   const reactThis = this;
  fetch('http://portfolio.test/contacts')
    .then((response) => {
        if(response.status != 200){
             console.log('api failed',response.status);
             return;
        }
        return response.json();
    })
    .then((result) =>{
      console.log(result);
        reactThis.setState({ contactList:result});
    })
    .catch((err) => {
        console.log('some error occured',err);
    })
}
  render() {
     const Fragment = React.Fragment;
    const rowSize = 4;
    let contactsInfo = {};
    let contactsData = this.state.contactList.map((contact)=>{
        contactsInfo = {
            thumbnail : contact.thumbnail,
            name: contact.name,
            designation: contact.designation,
            about: contact.about
        };
        return <Contacts key={contact.id} info = {contactsInfo}/>
    })
    .reduce((r,element,index) =>{
        index % rowSize ===0 && r.push([]);
        r[r.length-1].push(element);
        return r; // [[elem,elem....],[]]
    },[])
    .map((result,index )=>{
        return <ContactRows>{result}</ContactRows>
    })
    return (
    <>
      <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
        <p>{this.state.aboutDescription} </p>
      </div>
      {/* {contactsData} */}
    </>
    
      
     
   
    
    );
  }
}
