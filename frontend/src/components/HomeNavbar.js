import React from "react";
import HomePage from '../images/HomePage.png'
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 

class HomeNavbar extends React.Component {
  render() {
    return (
    
      <div> 
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Handshake</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/companySignUp">Company Sign-Up</Nav.Link>
                    <Nav.Link href="/companyLogin">Company Login</Nav.Link>
                    <Nav.Link href="/studentSignUp">Student Sign-Up</Nav.Link>
                    <Nav.Link href="/studentLogin">Student Login</Nav.Link>
                </Nav>
        </Navbar>
      </div>
      
    );
  }
}

export default HomeNavbar;
