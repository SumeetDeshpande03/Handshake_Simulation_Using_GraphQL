import React from 'react';
import { Button,Card} from 'react-bootstrap';
import axios from 'axios';
import {Redirect} from 'react-router';

class StudentCard extends React.Component {

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

    onViewProfileClick = e => {
        e.preventDefault();
        // this.setState({ redirect: <Redirect to={{pathname: '/studentViewJobDetails',  state:{jobPost: this.props.jobPost}}} /> });
    }
       
    render(){
        return(
            <div>
              {this.state.redirect}
              <Card>
                <Card.Header>
                  {this.props.student.name}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    College Name: {this.props.student.collegeName}
                    <br/>
                    City: {this.props.student.city}
                    <br/>
                    State: {this.props.student.state}
                    <br/>
                    Country: {this.props.student.country}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="outline-primary" onClick={this.onViewProfileClick}>View Profile</Button>
                </Card.Footer>
              </Card>          
            </div>
        );
    }
}

export default StudentCard;