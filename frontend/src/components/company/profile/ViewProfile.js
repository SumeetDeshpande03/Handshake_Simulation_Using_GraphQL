import React from 'react';
import {Button,Container,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import StudentNavbar from '../../student/StudentNavbar'

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

    render(){
        return(
            <div>
                <StudentNavbar/>
                <Container>
                    <br/>
                    <h2>Your Profile:</h2>
                    <hr/>
                    <h4>Name:</h4>
                    <p>{this.state.name}</p>
                    <hr/>
                    <h4>Location:</h4>
                    <p>{this.state.location}</p>
                    <hr/>
                    <h4>Description:</h4>
                    <p>{this.state.description}</p>
                    <hr/>        
                </Container>                
            </div>
        );
    }
}

export default Profile;