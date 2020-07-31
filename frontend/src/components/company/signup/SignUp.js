import React from "react";
import HomePageNavbar from '../../HomeNavbar'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'; 

class Signup extends React.Component {
  
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            location: ''
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.id] : e.target.value
        });
    };

    onSubmitHandler = e =>{
        if(this.state.name==='' || this.state.email==='' || this.state.password==='' || this.state.location===''){
            alert("Please fill all the form details before submitting")
        } else{
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                location: this.state.location           
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

    render() {
        return (
    
            <div> 
                <HomePageNavbar/>
                <br/>
                <br/>
                <div className="login-form-container col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 border">
                    <h2>Create Account</h2>
                    <hr/>
                    <div className="form-group login-form-control pad-top-20">
                        <label><h4>Company Name:</h4></label>
                        <input type="text" id="name" className="form-control form-control-lg"
                            onChange={this.onChangeHandler} 
                            placeholder="Company Name"/>
                    </div>
                    <div className="form-group login-form-control pad-top-20">
                        <label><h4>Email Id:</h4></label>
                        <input type="email" id="emailId" className="form-control form-control-lg"
                            onChange={this.onChangeHandler} 
                            placeholder="Email Id"/>
                    </div>
                    <div className="form-group login-form-control pad-top-20">
                        <label><h4>Password:</h4></label>
                        <input type="text" id="password" className="form-control form-control-lg"
                            onChange={this.onChangeHandler} 
                            placeholder="Password"/>
                    </div>
                    <div className="form-group login-form-control pad-top-20">
                        <label><h4>Location:</h4></label>
                        <input type="text" id="location" className="form-control form-control-lg"
                            onChange={this.onChangeHandler} 
                            placeholder="Location"/>
                    </div>
                    <div className="form-group login-form-control">
                        <Button variant="primary" size="sm" block onClick={this.onSubmitHandler}>
                            Sign Up          
                        </Button>   
                    </div>
                    <center><medium>OR</medium></center>
                    <center>
                        <Link to={{ pathname: "/companyLogin" }} style={{color:'blue'}}>Already have an account?</Link>
                    </center> 
                </div>
            </div>
      
        );
    }

}

export default Signup;
