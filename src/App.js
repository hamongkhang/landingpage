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
import Partner from "./components/Partner";
import $ from 'jquery';
import Alumni from "./components/Alumni";
import PartnerLocal from "./components/PartnerLocal";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const App=()=>{
  return(
    <Router>
    <Header />
    <Face />
    <main id="main">
        <Section />
        <Detail />
        <Feature />
        <Count />
        <Partner />
        <PartnerLocal />
        <Galery />
        <Alumni />
        <Team />
        <Testimonial />
        <Pricing />
        <FAQ />
    </main>
    <Contact />
    <Footer />
    <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
    <div id="preloader" ></div>
    </Router>
  );
}
export default App;