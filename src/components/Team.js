import OwlCarousel from 'react-owl-carousel'; 
const Team=()=>{
    return( 
      <section id="clients" className="staff">  
      <div className='container-fluid'  data-aos="fade-up" > 
      <div className="container">
      <div className="section-title">
          <h2>Staff</h2>
          <p>My Staff</p>
        </div> 
        </div> 
      <div className='row justify-content-center'> 
      <div className="col-xl-10">               
              <OwlCarousel className="owl-carousel staff-carousel" items={4} margin={8} autoplay ={true}>  
                <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
             
                <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
           
              
                <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
              
                <div className="member" data-aos="zoom-in" data-aos-delay={400}>
                  <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
              
                <div className="member" data-aos="zoom-in" data-aos-delay={500}>
                  <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
              
                <div className="member" data-aos="zoom-in" data-aos-delay={600}>
                  <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href><i className="icofont-twitter" /></a>
                      <a href><i className="icofont-facebook" /></a>
                      <a href><i className="icofont-instagram" /></a>
                      <a href><i className="icofont-linkedin" /></a>
                    </div>
                  </div>
                </div>
             
  </OwlCarousel>
  </div>  
  </div>  
</div>
   </section>  
        );
}
export default Team;