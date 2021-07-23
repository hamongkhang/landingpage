import axios from 'axios';
import React, { Component } from "react";
class Map extends Component {

    constructor(props) {
      super(props)
      this.state = {
        board: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/board/')
        .then(res => {
          this.setState({
            board: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
    
   <section id="map" className="map">
    <div className="container">
      <div className="text-center">
        <h3>Ban điều hành và nhân viên</h3>
        <div id="map-child">
        <img src="assets/img/Untitled-1.png" />
        <ul>
        {this.state.board.map((bo, i) => {
    return( 
      <li>{bo.board_name}, {bo.board_function}</li>
    )})}
             {/* <li>VÕ Hoàng Thùy Trang, Giám đốc điều hành</li>
             <li>ĐOÀN Triệu Thành, Trưởng phòng Tuyển sinh</li>
             <li>CHÂU Thị Mỹ Ngọc, Trưởng phòng Giáo dục</li>
             <li>HUỲNH Thị Kim Oanh, Trưởng phòng Đối ngoại</li>
             <li>ĐẶNG Nguyễn Uyên Phương, Trưởng phòng Hành chính, Nhân sự và Kế toán</li>
             <li>Lucas SINROD, Trưởng phòng Đào tạo</li> */}
        </ul>
            </div>
        <a className="cta-btn" href="https://www.passerellesnumeriques.org/wp-content/uploads/2016/08/PNV_OrgaChart_April2021.pdf">Tải về để xem chi tiết sơ đồ</a>
      </div>
    </div>
  </section>
  );
    }
}
export default Map;