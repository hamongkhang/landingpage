import axios from 'axios';
import React, { Component } from "react";
class Galery extends Component {

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
    <section id="gallery" className="gallery">
    <div className="container">
      <div className="section-title"  >
        <h2>Activity</h2>
        <p>Our Activity</p>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-3 col-md-4">
        {this.state.gallery.map((ga, i) => {
    return(
          <div className="gallery-item"  data-aos-delay={100}>
            <a href={"assets/img/gallery/"+ga.gallery_image} className="venobox" data-gall="gallery-item">
              <img src={"assets/img/gallery/"+ga.gallery_image} alt="" className="img-fluid" />
            </a>
          </div>)})}
        </div>
      </div>
    </div>
  </section>
    );}
}
export default Galery;