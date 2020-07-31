import React from 'react';
import Home from './components/Home'
import CompanySignUp from './components/company/signup/SignUp'
import StudentSignUp from './components/student/signup/SignUp'
import CompanyLogin from './components/company/login/Login'
import StudentLogin from './components/student/login/Login'
import CompanyProfile from './components/company/profile/Profile'
import StudentProfile from './components/student/profile/Profile'
import ViewCompanyProfile from './components/company/profile/ViewProfile'
import ViewStudentProfile from './components/student/profile/ViewProfile'
import CompanyPostJob from './components/company/jobs/PostJob'
import CompanyJobPostings from './components/company/jobs/JobPostings'
import CompanyViewApplicants from './components/company/jobs/ViewApplicants'
import StudentJobPostings from './components/student/jobs/JobPostings'
import StudentViewJobDetails from './components/student/jobs/ViewJobDetails'
import StudentViewApplications from './components/student/applications/Applications'
import StudentsTab from './components/student/students/Students'
import CompanyStudentsTab from './components/company/students/Students'
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/companySignUp'  component={CompanySignUp} />
        <Route path='/companyLogin'  component={CompanyLogin} />
        <Route path='/studentSignup'  component={StudentSignUp} />
        <Route path='/studentLogin'  component={StudentLogin} />
        <Route path='/companyProfile'  component={CompanyProfile} />
        <Route path='/studentProfile'  component={StudentProfile} />
        <Route path='/viewCompanyProfile'  component={ViewCompanyProfile} />
        <Route path='/viewStudentProfile'  component={ViewStudentProfile} />
        <Route path='/companyPostJob'  component={CompanyPostJob} />
        <Route path='/companyJobPostings'  component={CompanyJobPostings} />
        <Route path='/companyViewApplicants'  component={CompanyViewApplicants} />
        <Route path='/studentJobPostings'  component={StudentJobPostings} />
        <Route path='/studentViewJobDetails'  component={StudentViewJobDetails} />
        <Route path='/studentViewApplications'  component={StudentViewApplications} />
        <Route path='/student/studentsTab'  component={StudentsTab} />
        <Route path='/company/studentsTab'  component={CompanyStudentsTab} />
      </div>
    </Router>
  );
}

export default App;
