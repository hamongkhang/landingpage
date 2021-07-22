import axios from 'axios';
import React, { Component } from "react";
class Feature extends Component {

    constructor(props) {
      super(props)
      this.state = {
        companys: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/companys/')
        .then(res => {
          this.setState({
            companys: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
  
    <section id="features" className="features">
    <div className="container">
      <div className="section-title"  >
        <h2>PNV</h2>
        <p>Đối tác</p>
      </div>
      <div className="row">
      {this.state.companys.map((company, i) => {
    return(
        <div className="col-lg-3 col-md-4">
        <section id="company" className="company section-bg">
                      <a data-toggle="collapse" href={"#boi-list"+company.id}><img src={"assets/img/"+company.company_image} /></a>
                      <div id={"boi-list"+company.id} className="collapse">
                        <p>
                          {company.company_content}
                        </p>
                        <a href={company.company_link} >{company.company_name}</a>
                </div>
            </section>   
        </div>
        )
      }
      )
    }
      </div>
    </div>
  </section>
      );
}
}
export default Feature;