import React from "react";
import {Button} from 'react-bootstrap';
import {Redirect} from 'react-router';
import {Container,CardColumns} from 'react-bootstrap';
import ApplicantCard from './ApplicantCard'
import CompanyNavbar from '../CompanyNavbar';

class ViewApplicants extends React.Component {
    constructor(){
        super();
        this.state = {
            redirect:''
        }
    }
  
    render() {
    return (
    
      <div>
        {this.state.redirect}
        <CompanyNavbar/>
        <Container> 
          <br/>
          <h2>Applicants for {this.props.location.state.jobPost.jobTitle}:</h2>
          <br/>
          <br/>
          <CardColumns>
            {this.props.location.state.jobPost.applicants.map((applicant)=>{
              return <ApplicantCard key={applicant.id} applicant={applicant} />
            })}
          </CardColumns>
        </Container>
      </div>
      
    );
  }
}

export default ViewApplicants;
