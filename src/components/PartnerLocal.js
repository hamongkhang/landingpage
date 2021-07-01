import OwlCarousel from 'react-owl-carousel';   
const PartnerLocal=()=>{
    return(
        <section id="clients" className="clients">  
        <div className='container-fluid'  data-aos="fade-up" > 
        <div className="container">
        <div className="section-title">
            <h2>local partner</h2>
            <p>local partner</p>
          </div> 
          </div> 
        <div className='row justify-content-center' > 
        <div className="col-xl-10">               
        <OwlCarousel className="owl-carousel clients-carousel" items={5} margin={8} autoplay ={true} >  
                <img src="assets/img/clients/client-1.png" alt="" />
                <img src="assets/img/clients/client-2.png" alt="" />
                <img src="assets/img/clients/client-3.png" alt="" />
                <img src="assets/img/clients/client-4.png" alt="" />
                <img src="assets/img/clients/client-5.png" alt="" />
                <img src="assets/img/clients/client-6.png" alt="" />
                <img src="assets/img/clients/client-7.png" alt="" />
                <img src="assets/img/clients/client-8.png" alt="" />
    </OwlCarousel>
    </div>  
    </div>  
</div>
     </section>  
    );
}
export default PartnerLocal;