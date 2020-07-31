import React from 'react';
import {Button,Container,Modal,Form} from 'react-bootstrap';
import axios from 'axios';
import CompanyNavbar from '../CompanyNavbar';

class Profile extends React.Component {

    constructor(){
        super();
        this.state = {
            name: 'Oracle',
            location: 'Redwood Shores',
            description: 'Software and Technology Firm',
            temporaryName:'',
            temporaryLocation:'',
            temporaryDescription:'',
            showModal: false
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onEditClick = e =>{
        var temporaryName = this.state.name
        var temporaryLocation = this.state.location
        var temporaryDescription = this.state.description
        this.setState({
            temporaryName: temporaryName,
            temporaryLocation: temporaryLocation,
            temporaryDescription: temporaryDescription,
            showModal: true
        })
    }

    handleClose = () => {
        this.setState({
            temporaryName: '',
            temporaryLocation: '',
            temporaryDescription: '',
            showModal: false
        })
    }

    render(){
        return(
            <div>
                <CompanyNavbar/>
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
                    <Button variant="dark" onClick={this.onEditClick}>
                        Edit Profile
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.handleClose} animation={false} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control placeholder="Name" 
                                            value={this.state.temporaryName} 
                                            id="temporaryName"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Location:</Form.Label>
                                    <Form.Control placeholder="Location" 
                                            value={this.state.temporaryLocation} 
                                            id="temporaryLocation"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Description:</Form.Label>
                                    <Form.Control placeholder="Description" 
                                            value={this.state.temporaryDescription} 
                                            id="temporaryDescription"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleSave}>
                                Save Changes
                            </Button>
                            <Button variant="light" onClick={this.handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>                
            </div>
        );
    }
}

export default Profile;