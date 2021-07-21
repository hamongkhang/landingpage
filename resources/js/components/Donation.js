const Donation=()=>{
    return(
    <section id="donationcss" className="donationcss section-bg">
    <div className="container">
      <div className="section-title">
        <center><p>Bạn ủng hộ những hoạt động của chúng tôi và muốn hỗ trợ?</p></center>
      </div>
      <div className="donationcss-list">
      <center><a data-toggle="collapse" href="#donation2" className="collapsed">
      <button type="button">Donation</button>
      </a></center>
      <center>
            <div id="donation2" className="collapse" data-parent=".donationcss-list">
            <a id="close" data-toggle="collapse" href="#donation2" className="collapsed">
            X
            </a>  
            </div>
    </center>
      </div>
    </div>
  </section>
    );
}
export default Donation;