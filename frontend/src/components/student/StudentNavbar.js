import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 

class StudentNavbar extends React.Component {
  render() {
    return (
    
      <div> 
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/studentJobPostings">Handshake</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/studentProfile">Profile</Nav.Link>
                    <Nav.Link href="/studentViewApplications">Applications</Nav.Link>
                    <Nav.Link href="/student/studentsTab">Students</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
        </Navbar>
      </div>
      
    );
  }
}

export default StudentNavbar;
