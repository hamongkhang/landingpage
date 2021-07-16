
import axios from 'axios';
import React, { Component } from "react";
class Impact extends Component {

    constructor(props) {
      super(props)
      this.state = {
        impacts: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/impacts/')
        .then(res => {
          this.setState({
            impacts: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
    this.state.impacts.map((impact, i) => {
    return(
        <p>
      {impact.impact_content}
        </p>
         )})
      );
    }
}
export default Impact;