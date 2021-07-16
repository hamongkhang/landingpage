import OwlCarousel from 'react-owl-carousel'; 
import axios from 'axios';
import React, { Component } from "react";
class Team extends Component {

    constructor(props) {
      super(props)
      this.state = {
        team: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/staff/')
        .then(res => {
          this.setState({
            team: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
      <section id="clients" className="staff">  
      <div className='container-fluid'    > 
      <div className="container">
      <div className="section-title">
          <h2>Staff</h2>
          <p>My Staff</p>
        </div> 
        </div>   
        <center>    
        <div className="slider">
        {this.state.team.map((te, i) => {
    return(
      <div className="member" data-aos-delay={100}>
      <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
      <div className="member-info">
        <h4>Walter Whfdgdfite</h4>
        <span>Chief Executive Officer</span>
        <div className="social">
          <a href><i className="icofont-twitter" /></a>
          <a href><i className="icofont-facebook" /></a>
          <a href><i className="icofont-instagram" /></a>
          <a href><i className="icofont-linkedin" /></a>
      </div>
    </div>
        </div>
   
           )})}
          </div>
      </center> 

</div>
   </section>  
        );
}}
export default Team;