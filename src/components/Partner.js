import PartnerA from "./PartnerA";
import PartnerB from "./PartnerB";
import PartnerC from "./PartnerC";
import PartnerAll from "./PartnerAll";
import { BrowserRouter as Router,Switch, Route, Link, NavLink } from "react-router-dom";
const Partner=()=>{
    return(
        <Router>
        <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Partner</h2>
            <p>Partner</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li  className="filter-active"><Link className="khang" to="/">All</Link></li>
                <li ><Link className="khang" to="/PartA">A</Link></li>
                <li ><Link className="khang" to="/PartB">B</Link></li>
                <li ><Link className="khang" to="/PartC">C</Link></li>
              </ul>
            </div>
          </div>
          </div>
      </section>
      <nav>
      <Route path="/" exact component={PartnerAll} /> 
      <Route path="/PartA" component={PartnerA} />
      <Route path="/PartB" component={PartnerB} />
      <Route path="/PartC" component={PartnerC} />
     </nav>
      </Router>
    );
}
export default Partner;