import axios from 'axios';
import React, { Component } from "react";
class Count extends Component {

    constructor(props) {
      super(props)
      this.state = {
        count: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/count/')
        .then(res => {
          this.setState({
            count: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
    this.state.count.map((count, i) => {
    return(
      <section id="counts" className="counts">
    <div className="container">
    <div className="section-title"  >
        <h2>PNV</h2>
        <p>PN Việt Nam và 10 năm tác động bền vững cho xã hội Việt Nam:</p>
      </div>
      <div className="row"  >
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="icofont-simple-smile" />
            <span data-toggle="counter-up">{count.count_1}</span>
            <p>Sinh viên nghèo được nhận học bổng</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="icofont-document-folder" />
            <span data-toggle="counter-up">{count.count_2}</span>
            <p>Cựu sinh viên</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="icofont-live-support" />
            <span data-toggle="counter-up">{count.count_3}</span>
            <p>Là mức lương trung bình tháng của cựu sinh viên (VNĐ)</p>
          </div>
        </div>
      </div>


      <div className="row"  >
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="icofont-simple-smile" />
            <span data-toggle="counter-up">{count.count_4}</span>
            <p>Người hưởng lợi gián tiếp</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="icofont-document-folder" />
            <span data-toggle="counter-up">{count.count_5}%</span>
            <p>Sinh viên có việc làm ổn định</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="icofont-live-support" />
            <span data-toggle="counter-up">{count.count_6}%</span>
            <p>Cựu sinh viên làm việc trong ngành IT</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="icofont-users-alt-5" />
            <span data-toggle="counter-up">{count.count_7}%</span>
            <p>là phần thu nhập cựu sinh viên cung cấp cho gia đình hàng tháng</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    )})
    );
}
    }
export default Count;