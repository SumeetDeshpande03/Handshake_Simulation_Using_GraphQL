import React from "react";
import HomePage from '../images/HomePage.png'
import HomePageNavbar from '../components/HomeNavbar' 

class Home extends React.Component {
  render() {
    return (
    
      <div> 
          <HomePageNavbar/>
          <section>
            <img src={HomePage} style={{width:'100%'}}></img>  
          </section>
      </div>
      
    );
  }
}

export default Home;
