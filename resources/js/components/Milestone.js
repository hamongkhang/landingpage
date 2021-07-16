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
    this.state.milestones.map((milestone, i) => {
    return(
         <ul>
           <li><i className="icofont-check" />{milestone.milestone_content}</li>
           <li><i className="icofont-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
           <li><i className="icofont-check" /> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
           <li><i className="icofont-check" /> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
         </ul>
         )})
      );
    }
}
export default Milestone;