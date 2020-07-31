import React from 'react';
import { Button,Card} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router';

class JobCard extends React.Component {

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

    onViewApplicantsClick = e => {
        e.preventDefault();
        this.setState({ redirect: <Redirect to={{pathname: '/companyViewApplicants',  state:{jobPost: this.props.jobPost}}} /> });
    }
       
    render(){
        return(
            <div>
              {this.state.redirect}
              <Card>
                <Card.Header>
                  {this.props.jobPost.jobTitle}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Posting Date: {this.props.jobPost.postingDate}
                    <br/>
                    Application Deadline: {this.props.jobPost.applicationDeadline}
                    <br/>
                    Job Location: {this.props.jobPost.jobLocation}
                    <br/>
                    Salary: {this.props.jobPost.salary}
                    <br/>
                    Job Description: {this.props.jobPost.jobDescription}
                    <br/>
                    Job Category: {this.props.jobPost.jobCategory}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-primary" onClick={this.onViewApplicantsClick}>View Applicants</Button>
                </Card.Footer>
              </Card>          
            </div>
        );
    }
}

export default JobCard;