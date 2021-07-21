import axios from 'axios';
import React, { Component } from "react";
class Milestone extends Component {

    constructor(props) {
      super(props)
      this.state = {
        milestones: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/milestones/')
        .then(res => {
          this.setState({
            milestones: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return(
        <ul>
    {this.state.milestones.map((milestone, i) => {
    return(
        
           <li><i className="icofont-check" />{milestone.milestone_year} : {milestone.milestone_content}</li>
       
         )})
    }
     </ul>
      );
    }
}
export default Milestone;