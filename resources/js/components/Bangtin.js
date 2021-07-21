import React,{Component} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
class Bangtin extends Component{
    
  constructor(props) {
    super(props)
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        bangtins: [],
        username: '',
        password: '',
    };
  }

  onChangeUsername(e) {
    this.setState({username: e.target.value});
    console.log(this.state.username);
  }
  
  
  onChangePassword(e) {
    this.setState({password: e.target.value});
    console.log(this.state.password);
  }
  
  onSubmit(e) {  
      e.preventDefault();
    const expense = new FormData(); 
    expense.append( 
      "username",
     this.state.username
    ); 
    expense.append( 
      "password",
     this.state.password
    ); 
    console.log(expense);
    console.log(expense.password);
    axios.post('http://localhost:8000/api/clients', expense)
      .then(res => console.log(res.data));
    // console.log(`Expense successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Amount: ${this.state.amount}`);
    // console.log(`Description: ${this.state.description}`);
    Swal.fire(
  'Good job!',
  'Loggin Successfully',
  'success'
  )
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/bangtins/')
      .then(res => {
        this.setState({
            bangtins: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

    render(){
        return(
        <div id="bangtinclass" className="collapse">
            <div className="bangtrong">
     <div className="row" >
        <div className="col-lg-6 col-md-4">
        <form id="register"  onSubmit={this.onSubmit} encType="multipart/form-data">
            <center><h3><b>Đăng ký tài khoản</b></h3></center>
            <center><h6>Đăng ký tài khoản để có thể cập nhập thông tin mới nhát từ PNV</h6></center>
                     <center><input type="text" placeholder="Tên" value={this.state.username} onChange={this.onChangeUsername} /></center>
                     <center><input type="email"  value={this.state.password} onChange={this.onChangePassword} placeholder="Địa chỉ email" /></center>
                     <center> 
                         <div id="langu">
          <input type="radio" id="huey" name="drone" defaultValue="english" defaultChecked />
          <img src="assets/img/300px-Flag_of_the_United_Kingdom.svg.png" />
          <input type="radio" id="dewey" name="drone" defaultValue="vietnamese" />
          <img src="assets/img/quoc-ky-viet-nam.jpg" />
          <input type="radio" id="louie" name="drone" defaultValue="franch" />
          <img src="assets/img/Phap.jpg" />              
                              </div>
                           </center>
                     <center><button type="submit" className="submit" >Đăng ký</button></center>
        </form>
        </div>

       
        { this.state.bangtins.map((bangtin, i) => {
                return( 
<div className="col-lg-3 col-md-4">
             <div id="bang">
                 <img src={"assets/img/"+bangtin.image} />
                      <a data-toggle="collapse" href={"#bang"+bangtin.id}> 
                      <h5>{bangtin.title}</h5>
                      <h7>{bangtin.created_at}</h7>
                      <h6>{bangtin.demo}</h6>
                      <h6><b>....</b></h6>
                      </a>
            </div>
        </div>
                    
                 )})}
       { this.state.bangtins.map((bangtin, i) => {
                return( 
<div id={"bang"+bangtin.id} className="collapse">
            <div className="thang">
                         {bangtin.content}
             </div>
         </div>
       
                    
                 )})}
         
        
       
       
       
       
        </div>
       
       
       
        </div>
</div> 
    );
}}
export default Bangtin;