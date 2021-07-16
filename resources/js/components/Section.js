import axios from 'axios';
import Table from 'react-bootstrap/Table';
import React, { Component } from "react";
import SectionChild from './Section_child';
class Section extends Component {

  constructor(props) {
    super(props)
    this.state = {
      backgrounds: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/backgrounds/')
      .then(res => {
        this.setState({
          backgrounds: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render(){
  return (
    this.state.backgrounds.map((background, i) => {
     return(
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" >
            <a href={background.background_link} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" >
            <h3>{background.background_title}</h3>
            <p>{background.background_content}</p>
            <SectionChild />
        
            {/* <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><img src="assets/img/tải xuống.png" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="bx bx-gift" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="bx bx-atom" /></div>
            <h4 className="title"><a href>Dine Pad</a></h4>
            <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
          </div>
         */}
          </div>
        </div>
      </div>
    </section>
     );
    })
  );
}

}
export default Section;