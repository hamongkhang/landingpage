import React,{Component} from 'react';
import axios from "axios";
class SectionChild extends Component{
    
  constructor(props) {
    super(props)
    this.state = {
      background_items: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/background_items/')
      .then(res => {
        this.setState({
          background_items: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

    render(){
        return(
            this.state.background_items.map((background_item, i) => {
                return(
            <section id="boi" className="boi section-bg">
            <div className="container">
              <div className="boi-list">
                <ul>
                <li   data-aos-delay={100}>
                    <div className="goals">
                      <img src={"assets/img/"+background_item.background_item_image} />
                      <a data-toggle="collapse" className="collapsed" href={"#boi"+background_item.background_item_id}>{background_item.background_item_title}
                        <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    </div>
                    <div id={"boi"+background_item.background_item_id} className="collapse" data-parent=".boi-list">
                      <p>
                      {background_item.background_item_content}
                        </p>
                    </div>
                  </li>
                  

                </ul>
              </div>
            </div>
          </section>
                )})
        );
    }
}
export default SectionChild;