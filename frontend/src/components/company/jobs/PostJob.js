import React from 'react';
import { Button , Col, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router';
import CompanyNavbar from '../CompanyNavbar';

class PostJob extends React.Component {

    constructor(){
        super();
        this.state = {
            jobTitle: '',
            postingDate: '',
            applicationDeadline: '',
            jobLocation: '',
            salary: '',
            jobDescription: '',
            jobCategory:'Full Time',
            redirect:''
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };
    
    onSelectCategory = e => {
        this.setState({jobCategory: e.target.value})
    }

    onSubmitHandler = e =>{
        if(this.state.jobTitle==='' || this.state.postingDate==='' || this.state.applicationDeadline==='' || 
        this.state.jobLocation==='' || this.state.salary===''|| this.state.jobDescription==='' || this.state.jobCategory===''){
            alert("Please fill all the form details before submitting")
        } else{
            const id = localStorage.getItem("id")
            
            const data = {
                jobTitle: this.state.jobTitle,
                postingDate: this.state.postingDate,
                applicationDeadline: this.state.applicationDeadline,
                jobLocation: this.state.jobLocation,
                salary: this.state.salary,
                jobDescription: this.state.jobDescription,
                jobCategory: this.state.jobCategory           
            }
            // console.log(data)
            // axios.post(exportData.backenedURL + 'write/customer/profile/address/' + id, JSON.stringify(data), {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}})
            // .then(res => {
            //     if (res.status === 200) {
            //         console.log(res)
            //         this.setState({redirect: <Redirect to={{pathname: '/user/address/manageAddresses/'}} />})
            //     } 
            // })
        }    
    }

    render(){
        return(
          <div>
            {this.state.redirect}
            <CompanyNavbar/>
            <Container>
                <br/>
                <h2>Add a New Job Posting:</h2>
                <br/>
                    <Form.Group>
                        <Form.Label>Job Title:</Form.Label>
                        <Form.Control id="jobTitle" 
                                      value={this.state.jobTitle} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Job Title"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Posting Date:</Form.Label>
                        <Form.Control id="postingDate" 
                                      value={this.state.postingDate} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Posting Date"
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Application Deadline:</Form.Label>
                        <Form.Control id="applicationDeadline" 
                                      value={this.state.applicationDeadline} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Application Deadline" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Job Location:</Form.Label>
                        <Form.Control id="jobLocation" 
                                      value={this.state.jobLocation} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Job Location" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Salary:</Form.Label>
                        <Form.Control id="salary" 
                                      value={this.state.salary} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Salary" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Job Description:</Form.Label>
                        <Form.Control id="jobDescription" 
                                      value={this.state.jobDescription} 
                                      onChange={this.onChangeHandler} 
                                      placeholder="Job Description" 
                                      required/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Job Category:</Form.Label>
                        <Form.Control as="select" onChange={this.onSelectCategory}>
                            <option value="Full Time" label="Full Time"></option>
                            <option value="Part Time" label="Part Time"></option>
                            <option value="Intern" label="Intern"></option>
                            <option value="On Campus" label="On Campus"></option>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Button variant="primary" onClick={this.onSubmitHandler}>
                        Post Job
                    </Button>
            </Container>                
          </div>
        );
    }
}

export default PostJob;