import axios from 'axios';
import React, { Component } from "react";
class Staff extends Component {

    constructor(props) {
      super(props)
      this.state = {
        gallery: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/gallery/')
        .then(res => {
          this.setState({
            gallery: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
        this.state.gallery.map((ga, i) => {
            return(
                <OwlCarousel className="owl-carousel staff-carousel" items={4} margin={8} autoplay ={true}> 
    <div className="member"  data-aos-delay={100}>
        <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
        <div className="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
          <div className="social">
            <a href><i className="icofont-twitter" /></a>
            <a href><i className="icofont-facebook" /></a>
            <a href><i className="icofont-instagram" /></a>
            <a href><i className="icofont-linkedin" /></a>
          </div>
        </div>
      </div> </OwlCarousel>
      
      )})
   
   
      )}}
      export default Staff;