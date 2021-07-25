import axios from 'axios';
import React, { Component } from "react";
class Header extends Component {

    constructor(props) {
      super(props)
      this.state = {
        status: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/status/')
        .then(res => {
          this.setState({
            status: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
  <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    
  <div className="container d-flex align-items-center">

    <div className="logo mr-auto">
      <h1 className="text-light"><a href="index.html"><span><img src="assets/img/logo-vi.png"  /></span></a></h1>
    </div>
  <nav className="nav navbar-expand-lg navbar-dark">
  {this.state.status.map((sta, i) => {
    return(
        <p>
  <font><marquee direction="left" width="1100px" height="32px" style={{color:sta.status_color}}>{sta.status_mess}</marquee></font>
        </p>
         )})}
  
    <div className="language mr-auto">
      <a href="index.html"><span><img src="assets/img/300px-Flag_of_the_United_Kingdom.svg.png"  /></span></a>
     <a href="index.html"><span><img src="assets/img/quoc-ky-viet-nam.jpg"  /></span></a>
      <a href="index.html"><span><img src="assets/img/Phap.jpg"  /></span></a>
    </div>
      <ul>
        <li className="active"><a href="#">Trang chủ</a></li>
        <li><a href="#about">Giới thiệu</a></li>
        <li><a href="#donationcss">Ủng hộ</a></li>
        <li><a href="#cta">Cựu sinh viên</a></li>
        <li><a href="#features">Đối tác</a></li>
        <li><a href="#faq">Tuyển dụng</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </nav>
  </div>
</header>
  );
}
}
export default Header;