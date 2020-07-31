import React from 'react';
import { Button,Card} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router';

class ApplicantCard extends React.Component {

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
        // this.setState({ redirect: <Redirect to={{pathname: '/companyViewApplicants',  state:{jobPost: this.props.jobPost}}} /> });
    }
       
    render(){
        return(
            <div>
                {this.state.redirect}
                    <Card>
                        <Card.Header>
                          {this.props.applicant.name}
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <Button variant="outline-primary" onClick={this.onViewApplicantsClick}>View Profile</Button>
                        </Card.Footer>
                    </Card>          
            </div>
        );
    }
}

export default ApplicantCard;