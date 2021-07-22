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
        <h2>PNV</h2>
        <p>Thư viện kỉ niệm</p>
      </div>
      <div className="row no-gutters">
       
        {this.state.gallery.map((ga, i) => {
    return(
      <div className="col-lg-3 col-md-4">
          <div className="gallery-item"  data-aos-delay={100}>
            <a href={"assets/img/"+ga.gallery_image} className="venobox" data-gall="gallery-item">
              <img src={"assets/img/"+ga.gallery_image} alt="" className="img-fluid" />
            </a>
            </div>    </div>)})}
      
      </div>
    </div>
  </section>
    );}
}
export default Galery;