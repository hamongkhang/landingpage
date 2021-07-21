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
        <li className="active"><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#counts">Statistical</a></li>
        <li><a href="#donationcss">Donation</a></li>
        <li><a href="#cta">Alumni</a></li>
        <li><a href="#features">Partner</a></li>
        <li><a href="#faq">Recruitment</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
  );
}
}
export default Header;