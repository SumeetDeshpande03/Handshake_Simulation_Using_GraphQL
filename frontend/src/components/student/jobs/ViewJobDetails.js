import React from 'react';
import {Button,Container,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import StudentNavbar from '../StudentNavbar'

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
            name: 'Oracle',
            location: 'Redwood Shores',
            description: 'Software and Technology Firm',
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    onViewCompanyProfile=(e)=>{
        e.preventDefault();
    }

    onApplyClick=(e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <StudentNavbar/>
                <Container>
                    <br/>
                    <h2>{this.props.location.state.jobPost.jobTitle}</h2>
                    <hr/>
                    <h4>Company Name:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.companyName} &nbsp; &nbsp; &nbsp; &nbsp; <Button variant="primary" onClick={this.onViewCompanyProfile}>View Profile</Button></p>
                    <hr/>
                    <h4>Posting Date:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.postingDate}</p>
                    <hr/>
                    <h4>Application Deadline:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.applicationDeadline}</p>
                    <hr/>
                    <h4>Job Location:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.jobLocation}</p>
                    <hr/>
                    <h4>Salary:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.salary}</p>
                    <hr/>
                    <h4>Job Description:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.jobDescription}</p>
                    <hr/>
                    <h4>Job Category:</h4>
                    <br/>
                    <p>{this.props.location.state.jobPost.jobCategory}</p>
                    <hr/>
                    <br/>    
                    <Button variant="primary" onClick={this.onApplyClick}>
                        Apply
                    </Button>
                    <br/>
                    <br/>
                    <br/>        
                </Container>                
            </div>
        );
    }
}

export default Profile;