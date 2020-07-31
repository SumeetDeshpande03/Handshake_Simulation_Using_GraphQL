import React from 'react';
import {Redirect} from 'react-router';
import {Button,Container,CardColumns} from 'react-bootstrap';
import axios from 'axios';
import ApplicationCard from './ApplicationCard';
import StudentNavbar from '../StudentNavbar'

class Applications extends React.Component {

    constructor(){
        super();
        this.state = {
            applications: [{id:"1", companyName: "Oracle", jobTitle: "Student Assistant", postingDate: "3rd May, 2020" , applicationDeadline: "5th May, 2020", 
                        appliedOn:"4th May, 2020",jobLocation: "San Jose", salary: "10$/Hr", jobDescription: "Assisting Professor", jobCategory: "On Campus",
                        applicants:[{id:"1", name: "Applicant 1"}, {id:"2", name: "Applicant 2"}]}],
            redirect: ''
        }
    }

    componentDidMount(){
   
    }

    render(){
        return(
          <div>
            <StudentNavbar/>
            <Container>
                {this.state.redirect}
                <br/>
                <h2>Applications:</h2>
                <br/>
                <br/>
                <CardColumns>
                  {this.state.applications.map((application)=>{
                    return <ApplicationCard key={application.id} application={application} />
                  })}
                </CardColumns>                
            </Container>                
          </div>
        );
    }
}

export default Applications;