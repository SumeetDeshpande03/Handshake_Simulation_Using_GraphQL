import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 

class CompanyNavbar extends React.Component {
  render() {
    return (
    
      <div> 
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/companyJobPostings">Handshake</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/companyProfile">Profile</Nav.Link>
                    <Nav.Link href="/company/studentsTab">Students</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
        </Navbar>
      </div>
      
    );
  }
}

export default CompanyNavbar;
