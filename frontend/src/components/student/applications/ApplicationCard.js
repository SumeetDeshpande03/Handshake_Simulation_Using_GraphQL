import React from 'react';
import { Button,Card} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router';

class ApplicationCard extends React.Component {

    constructor(){
        super();
        this.state = {
          redirect: ''
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
              {this.state.redirect}
              <Card>
                <Card.Header>
                  {this.props.application.jobTitle}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Company Name: {this.props.application.companyName}
                    <br/>
                    Posting Date: {this.props.application.postingDate}
                    <br/>
                    Application Deadline: {this.props.application.applicationDeadline}
                    <br/>
                    Applied On: {this.props.application.appliedOn}
                    <br/>
                    Job Location: {this.props.application.jobLocation}
                    <br/>
                    Salary: {this.props.application.salary}
                    <br/>
                    Job Description: {this.props.application.jobDescription}
                    <br/>
                    Job Category: {this.props.application.jobCategory}
                  </Card.Text>
                </Card.Body>
              </Card>          
            </div>
        );
    }
}

export default ApplicationCard;