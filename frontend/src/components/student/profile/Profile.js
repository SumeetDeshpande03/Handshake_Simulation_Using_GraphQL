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
            temporaryName:'',
            temporaryCareerObjective: '',
            temporaryDateOfBirth:'',
            temporaryCity:'',
            temporaryState: '',
            temporaryCountry: '',
            showBasicDetailModal: false,

            collegeName: '',
            collegeLocation: '',
            degree: '',
            major: '',
            yearOfPassing: '',
            cgpa: '',
            temporaryCollegeName: '',
            temporaryCollegeLocation: '',
            temporaryDegree: '',
            temporaryMajor: '',
            temporaryYearOfPassing: '',
            temporaryCgpa: '',
            showEducationDetailModal: false, 
            
            companyName: '',
            companyLocation: '',
            jobTitle: '',
            startDate: '',
            endDate: '',
            workDescription: '',
            temporaryCompanyName: '',
            temporaryCompanyLocation: '',
            temporaryJobTitle: '',
            temporaryStartDate: '',
            temporaryEndDate: '',
            temporaryWorkDescription: '',
            showExperienceDetailModal: false            
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onEditBasicDetailsClick = e =>{
        var temporaryName = this.state.name
        var temporaryCareerObjective = this.state.careerObjective
        var temporaryDateOfBirth = this.state.dateOfBirth
        var temporaryCity = this.state.city
        var temporaryState = this.state.state
        var temporaryCountry = this.state.country
        this.setState({
            temporaryName: temporaryName,
            temporaryCareerObjective: temporaryCareerObjective,
            temporaryDateOfBirth: temporaryDateOfBirth,
            temporaryCity: temporaryCity,
            temporaryState: temporaryState,
            temporaryCountry: temporaryCountry,
            showBasicDetailModal: true
        })
    }

    handleBasicDetailsClose = () => {
        this.setState({
            temporaryName: '',
            temporaryCareerObjective: '',
            temporaryDateOfBirth: '',
            temporaryCity: '',
            temporaryState: '',
            temporaryCountry: '',
            showBasicDetailModal: false
        })
    }

    onEditEducationDetailsClick = e =>{
        var temporaryCollegeName = this.state.collegeName
        var temporaryCollegeLocation = this.state.collegeLocation
        var temporaryDegree = this.state.degree
        var temporaryMajor = this.state.major
        var temporaryYearOfPassing = this.state.yearOfPassing
        var temporaryCgpa = this.state.cgpa
        this.setState({
            temporaryCollegeName: temporaryCollegeName,
            temporaryCollegeLocation: temporaryCollegeLocation,
            temporaryDegree: temporaryDegree,
            temporaryMajor: temporaryMajor,
            temporaryYearOfPassing: temporaryYearOfPassing,
            temporaryCgpa: temporaryCgpa,
            showEducationDetailModal: true
        })
    }

    handleEducationDetailsClose = () => {
        this.setState({
            temporaryCollegeName: '',
            temporaryCollegeLocation: '',
            temporaryDegree: '',
            temporaryMajor: '',
            temporaryYearOfPassing: '',
            temporaryCgpa: '',
            showEducationDetailModal: false
        })
    }

    onEditExperienceDetailsClick = e =>{
        var temporaryCompanyName = this.state.companyName
        var temporaryCompanyLocation = this.state.companyLocation
        var temporaryJobTitle = this.state.jobTitle
        var temporaryStartDate = this.state.startDate
        var temporaryEndDate = this.state.endDate
        var temporaryWorkDescription = this.state.workDescription
        this.setState({
            temporaryCompanyName: temporaryCompanyName,
            temporaryCompanyLocation: temporaryCompanyLocation,
            temporaryJobTitle: temporaryJobTitle,
            temporaryStartDate: temporaryStartDate,
            temporaryEndDate: temporaryEndDate,
            temporaryWorkDescription: temporaryWorkDescription,
            showExperienceDetailModal: true
        })
    }

    handleExperienceDetailsClose = () => {
        this.setState({
            temporaryCompanyName: '',
            temporaryCompanyLocation: '',
            temporaryJobTitle: '',
            temporaryStartDate: '',
            temporaryEndDate: '',
            temporaryWorkDescription: '',
            showExperienceDetailModal: false
        })
    }

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
                    <Button variant="primary" onClick={this.onEditBasicDetailsClick}>
                        Edit Basic Details
                    </Button>
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
                    <Button variant="primary" onClick={this.onEditEducationDetailsClick}>
                        Edit Education Details
                    </Button>
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
                    <hr/>    
                    <Button variant="primary" onClick={this.onEditExperienceDetailsClick}>
                        Edit Experience Details
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <Modal show={this.state.showBasicDetailModal} onHide={this.handleBasicDetailsClose} animation={false} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Basic Details</Modal.Title>
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
                                    <Form.Label>Career Objective:</Form.Label>
                                    <Form.Control placeholder="Career Objective" 
                                            value={this.state.temporaryCareerObjective} 
                                            id="temporaryCareerObjective"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Date Of Birth:</Form.Label>
                                    <Form.Control placeholder="Date Of Birth" 
                                            value={this.state.temporaryDateOfBirth} 
                                            id="temporaryDateOfBirth"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>City:</Form.Label>
                                    <Form.Control placeholder="City" 
                                            value={this.state.temporaryCity} 
                                            id="temporaryCity"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>State:</Form.Label>
                                    <Form.Control placeholder="State" 
                                            value={this.state.temporaryState} 
                                            id="temporaryState"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Country:</Form.Label>
                                    <Form.Control placeholder="Country" 
                                            value={this.state.temporaryCountry} 
                                            id="temporaryCountry"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleBasicDetailSave}>
                                Save Changes
                            </Button>
                            <Button variant="light" onClick={this.handleBasicDetailsClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.showEducationDetailModal} onHide={this.handleEducationDetailsClose} animation={false} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Education Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>College Name:</Form.Label>
                                    <Form.Control placeholder="College Name" 
                                            value={this.state.temporaryCollegeName} 
                                            id="temporaryCollegeName"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>College Location:</Form.Label>
                                    <Form.Control placeholder="College Location" 
                                            value={this.state.temporaryCollegeLocation} 
                                            id="temporaryCollegeLocation"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Degree:</Form.Label>
                                    <Form.Control placeholder="Degree" 
                                            value={this.state.temporaryDegree} 
                                            id="temporaryDegree"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Major:</Form.Label>
                                    <Form.Control placeholder="Major" 
                                            value={this.state.temporaryMajor} 
                                            id="temporaryMajor"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Year Of Passing:</Form.Label>
                                    <Form.Control placeholder="Year Of Passing" 
                                            value={this.state.temporaryYearOfPassing} 
                                            id="temporaryYearOfPassing"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Current CGPA:</Form.Label>
                                    <Form.Control placeholder="Current CGPA" 
                                            value={this.state.temporaryCgpa} 
                                            id="temporaryCgpa"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleEducationDetailSave}>
                                Save Changes
                            </Button>
                            <Button variant="light" onClick={this.handleEducationDetailsClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.showExperienceDetailModal} onHide={this.handleExperienceDetailsClose} animation={false} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Experience Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Company Name:</Form.Label>
                                    <Form.Control placeholder="Company Name" 
                                            value={this.state.temporaryCompanyName} 
                                            id="temporaryCompanyName"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Company Location:</Form.Label>
                                    <Form.Control placeholder="Company Location" 
                                            value={this.state.temporaryCompanyLocation} 
                                            id="temporaryCompanyLocation"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control placeholder="Title" 
                                            value={this.state.temporaryJobTitle} 
                                            id="temporaryJobTitle"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Start Date:</Form.Label>
                                    <Form.Control placeholder="Start Date" 
                                            value={this.state.temporaryStartDate} 
                                            id="temporaryStartDate"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>End Date:</Form.Label>
                                    <Form.Control placeholder="End Date" 
                                            value={this.state.temporaryEndDate} 
                                            id="temporaryEndDate"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Work Description:</Form.Label>
                                    <Form.Control placeholder="Work Description" 
                                            value={this.state.temporaryWorkDescription} 
                                            id="temporaryWorkDescription"
                                            required
                                            onChange={this.onChangeHandler}/>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={this.handleExperienceDetailSave}>
                                Save Changes
                            </Button>
                            <Button variant="light" onClick={this.handleExperienceDetailsClose}>
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