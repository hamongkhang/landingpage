import OwlCarousel from 'react-owl-carousel'; 
import axios from 'axios';
import React, { Component } from "react";
class Testimonial extends Component {

    constructor(props) {
      super(props)
      this.state = {
        testimonial: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/student/')
        .then(res => {
          this.setState({
            testimonial: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
        <section id="share" className="share"> 
        <div className='container-fluid'    >  
        <div className='row justify-content-center' > 
        <div className="col-xl-10">   
        <div id="slideshow">
        <div className="slide-wrapper">
        {this.state.testimonial.map((tes, i) => {
    return(
          <div className="testimonial-item">
          <img src={"assets/img/testimonials/"+tes.student_image} className="testimonial-img" alt="" />
          <h3>  {tes.student_name}</h3>
          <h4>PNV &amp;  Alumni</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left" />
        {tes.student_mess}
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </p>
          </div>
           )})}
      </div>
      </div>

    </div>  
    </div>  
</div>
     </section>  
 



    );
}
}
export default Testimonial;