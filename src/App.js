import Header from './components/Header';
import Face from './components/Face';
import Section from "./components/Section";
import Feature from "./components/Feature";
import Count from './components/Count';
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Galery from "./components/Galery";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import $ from 'jquery';
import Alumni from "./components/Alumni";
import PartnerLocal from "./components/PartnerLocal";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Map from "./components/Map";
import Bangtin from "./components/Bangtin";
import Donation from "./components/Donation";

const App=()=>{
  return(
    <Router>
    <Header />
    <Face />
    <main id="main">
        <Section />
        <Detail />
        <Count />
        <Donation />
        <Alumni />
        <Feature />
        <PartnerLocal />
        <Map />
        <Team />
        <Galery />
        <Testimonial />
        <Pricing />
        <FAQ />
    </main>
    <Contact />
    <Footer />
    <div className="bangtin"><a data-toggle="collapse" href="#bangtinclass"><h3>Bảng tin</h3></a></div>
    <Bangtin />
    <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
    <div id="preloader" ></div>
    </Router>
  );
}
export default App;