import React from 'react';
import {Redirect} from 'react-router';
import {Button,Container,CardColumns} from 'react-bootstrap';
import axios from 'axios';
import StudentCard from './StudentCard';
import CompanyNavbar from '../CompanyNavbar';

class Students extends React.Component {

    constructor(){
        super();
        this.state = {
            students: [{id:"1", name: "Sumeet Suhas Deshpande", collegeName: "D.J. Sanghvi College of Engineering", 
                        city: "Mumbai", state: "Maharashtra", country:"India"}],
            redirect: ''
        }
    }

    componentDidMount(){
   
    }

    render(){
        return(
          <div>
            {this.state.redirect}
            <CompanyNavbar/>
            <Container>
                <br/>
                <h2>Students:</h2>
                <br/>
                <br/>
                <CardColumns>
                  {this.state.students.map((student)=>{
                    return <StudentCard key={student.id} student={student} />
                  })}
                </CardColumns>                
            </Container>                
          </div>
        );
    }
}

export default Students;