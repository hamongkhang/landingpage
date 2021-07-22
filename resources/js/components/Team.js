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
          <h2>PNV</h2>
          <p>Đội ngũ nhân viên</p>
        </div> 
        </div>   
        <center>    
        <div className="slider">
        {this.state.team.map((te, i) => {
    return(
      <div className="member" data-aos-delay={100}>
      <div className="pic"><img src={"assets/img/"+te.staff_image} className="img-fluid" alt="" /></div>
      <div className="member-info">
        <h4>{te.staff_name}</h4>
        <span>{te.staff_function}</span>
        <div className="social">
          <a href="mailto:info@honeydreams.com"><i className="icofont-email" /></a>
          <a href={te.staff_facebook}><i className="icofont-facebook" /></a>
          <a href="tel:1234567890" className="mr-2"><i className="icofont-phone" /></a>
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