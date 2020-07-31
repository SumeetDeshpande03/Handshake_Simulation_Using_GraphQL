import React from 'react';
import {Button,Container,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import StudentNavbar from '../StudentNavbar'

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
            name: '',
            careerObjective: '',
            dateOfBirth: '',
            city: '',
            state: '',
            country: '',

            collegeName: '',
            collegeLocation: '',
            degree: '',
            major: '',
            yearOfPassing: '',
            cgpa: '',
            
            companyName: '',
            companyLocation: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            workDescription: ''            
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    render(){
        return(
            <div>
                <StudentNavbar/>
                <Container>
                    <br/>
                    <h2>Your Profile:</h2>
                    <hr/>
                    <h3>Basic Details:</h3>
                    <br/>
                    <h4>Name:</h4>
                    <p>{this.state.name}</p>
                    <hr/>
                    <h4>Career Objective:</h4>
                    <p>{this.state.careerObjective}</p>
                    <hr/>
                    <h4>Date Of Birth:</h4>
                    <p>{this.state.dateOfBirth}</p>
                    <hr/>
                    <h4>City:</h4>
                    <p>{this.state.city}</p>
                    <hr/>
                    <h4>State:</h4>
                    <p>{this.state.state}</p>
                    <hr/>
                    <h4>Country:</h4>
                    <p>{this.state.country}</p>
                    <hr/>    
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <h3>Education Details:</h3>
                    <br/>
                    <h4>College Name:</h4>
                    <p>{this.state.collegeName}</p>
                    <hr/>
                    <h4>Location:</h4>
                    <p>{this.state.collegeLocation}</p>
                    <hr/>
                    <h4>Degree:</h4>
                    <p>{this.state.degree}</p>
                    <hr/>
                    <h4>Major:</h4>
                    <p>{this.state.major}</p>
                    <hr/>
                    <h4>Year Of Passing:</h4>
                    <p>{this.state.yearOfPassing}</p>
                    <hr/>
                    <h4>Current CGPA:</h4>
                    <p>{this.state.cgpa}</p>
                    <hr/>    
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <h3>Experience Details:</h3>
                    <br/>
                    <h4>Company Name:</h4>
                    <p>{this.state.companyName}</p>
                    <hr/>
                    <h4>Title:</h4>
                    <p>{this.state.jobTitle}</p>
                    <hr/>
                    <h4>Location:</h4>
                    <p>{this.state.companyLocation}</p>
                    <hr/>
                    <h4>Start Date:</h4>
                    <p>{this.state.startDate}</p>
                    <hr/>
                    <h4>End Date:</h4>
                    <p>{this.state.endDate}</p>
                    <hr/>
                    <h4>Work Description:</h4>
                    <p>{this.state.workDescription}</p>                       
                    <br/>
                    <br/>
                    
                </Container>                
            </div>
        );
    }
}

export default Profile;