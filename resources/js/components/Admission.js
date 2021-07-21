
import axios from 'axios';
import React, { Component } from "react";
class Admission extends Component {

    constructor(props) {
      super(props)
      this.state = {
        admissions: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/admissions/')
        .then(res => {
          this.setState({
            admissions: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
    this.state.admissions.map((admission, i) => {
    return(
        <p>
      {admission.admission_content}
        </p>
         )})
      );
    }
}
export default Admission;