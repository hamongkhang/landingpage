import { Component } from 'react';
class Donation extends Component {
    render() {
        return( 
            <section id="donation" className="">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4 left" id="form">
                    <div className="faqs-sidebar pos-rel">
                        <h4 className="text-center">MY DONATION</h4>
                        <section id="tabs-t" className="tabs">
                            <div className="container" >
                                 <ul className="nav nav-tabs row d-flex font-italic">
                                    <li className="nav-item col-6">
                                        <a className="nav-link active show" data-toggle="tab" href="#tab-amount">
                                            <h4 className="d-none d-lg-block">Donation amount</h4>
                                        </a>
                                    </li>
                                    <li className="nav-item col-6">
                                        <a className="nav-link" data-toggle="tab" href="#tab-month">
                                            <h4 className="d-none d-lg-block">Monthly donation amount</h4>
                                        </a>
                                    </li>
                                  </ul>
                                  <div className="tab-content">
                                      <div className="tab-pane" id="tab-amount">
                                                <div className="row">
                                                    <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                    <div className="amount" id="amount">
                                    <h5  className="font-italic text-center">Donation amount</h5>
                                    <ul className="nav nav-tabs row d-flex">
                                        <li className="nav-item col-2">
                                            <a className="click-chose " data-toggle="tab" href="#cont-1">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                    <button className="btn">$15</button >
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-2">
                                            <a className="click-chose" data-toggle="tab" href="#cont-2">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                    <button className="btn">$45</button>
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-2">
                                            <a className="click-chose" data-toggle="tab" href="#cont-3">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                    <button className="btn">$75</button>
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-2">
                                            <a className="click-chose" data-toggle="tab" href="#cont-4">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                    <button className="btn">$150</button>
                                                </a>

                                            </a>
                                        </li>
                                        <li className="nav-item col-2">
                                            <a className="click-chose" data-toggle="tab" href="#cont-5">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                    <button className="btn">$400</button>
                                                </a>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="cont-1">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p >cover college fees for one student in Vietnam for one year</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane " id="cont-2">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                                    <p className="font-italic">
                                                        <p id="">cover the food for a student for a month in the Vietnam</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="cont-3">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p id="">cover the food for a student for a month in the Vietnam</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="cont-4">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p >cover English classes for 6 students for one month in Cambodia</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="cont-5">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p >cover English classes for 6 students for one month in Cambodia</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="otherAmount">
                                        <a className="click-chose font-italic" data-toggle="tab" href="#money">
                                            <span >other amount:  </span>
                                            <input type="number" className="form-control form-light" id="otherAmonut" style={{ width: '100px' }}></input>$
                                        </a>
                                    </div>

                                    <div className="tab-content">
                                        <div className="tab-pane" id="money">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                  
                                                        <p className="font-italic">Your donation will only cost you 0.00 € after the tax deduction.</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                              
                                                </div>
                                            </div>
                                        </div>
                             {/* div close amount */}
                                     <div className="tab-pane active show" id="tab-month">
                                                <div className="row">
                                                    <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                    <div className="month" id = "monthn">
                                    <h5 className="font-italic text-center">Monthly donation amount</h5>

                                    <ul className="nav nav-tabs row d-flex">
                                        <li className="nav-item col-3">
                                            <a className="click-chose " data-toggle="tab" href="#content-1">
                                            <a className="click-chose" data-toggle="tab" href="#money-2">
                                                <button className="btn">$25</button >
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-3">
                                            <a className="click-chose" data-toggle="tab" href="#content-2">
                                            <a className="click-chose" data-toggle="tab" href="#money-2">
                                                <button className="btn">$50</button>
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-3">
                                            <a className="click-chose" data-toggle="tab" href="#content-3">
                                            <a className="click-chose" data-toggle="tab" href="#money-2">
                                                <button className="btn">$100</button>
                                                </a>
                                            </a>
                                        </li>
                                        <li className="nav-item col-3">
                                            <a className="click-chose" data-toggle="tab" href="#content-4">
                                            <a className="click-chose" data-toggle="tab" href="#money-2">
                                                <button className="btn">$500</button>
                                                </a>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="content-1">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                        <p className="font-italic">cover college fees for one student in Vietnam for one year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane " id="content-2">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                                                     <p className="font-italic">cover the food for a student for a month in the Vietnam</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="content-3">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p id="">cover the food for a student for a month in the Vietnam</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="content-4">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                    <p className="font-italic">
                                                        <p >cover English classes for 6 students for one month in Cambodia</p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="otherAmount"> 
                                        <a className="click-chose" data-toggle="tab" href="#money-2">
                                            <span className ="font-italic">other amount:  </span> 
                                            <input  type="number"   className="form-control form-light" id="otherAmonut-2" style={{ width: '100px' }}></input>$
                                        </a>
                                    </div>
                                     <div className="tab-content">
                                        <div className="tab-pane" id="money-2">
                                            <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                       <span  className="font-italic">Your donation will only cost you 0.00 € after the tax deduction.</span>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                     </div>   
                            </div> 
                           {/* div close month */}  
                                                   </div>
                                              </div>  
                                     </div>            
                                </div>
                                {/* div close choose donation */}
                                {/* <div className=""> */}
                                <h4 className="text-center sumary">MY SUMMARY</h4>
                                <div className="table-responsive">
                                    <table className="table font-italic">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Selection</th>
                                                <th>Donation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Donation</td>
                                                <td>$</td>
                                            </tr>
                                            <tr>
                                                <td>Your contribution to the function of HelloAsso.</td>
                                                <td>$</td>
                                            </tr>
                                            <tr>
                                                <td><b>Total</b></td>
                                                <td>$</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* div close sumary */}
                                {/* </div> */}
                                       {/* contact us */}
                                       <div className="container">
                                       <div className="row">
                                     <h4 className="text-center">CONTACT US</h4>
                                    <div className="col-lg-8 col-md-4 tt">
                                        <p className="font-italic"> 
                                                31, rue de l'Ourcq 
                                                75019 Paris <br/>
                                                +33 1 42 00 84 89 <br/>
                                                julie.laporte@passerellesnumeriques.org <br/>
                                               <span style={{ color:"blue" }}>https://www.passerellesnumeriques.org/en/ <br/>
                                                https://www.facebook.com/passerelles.numeriques/</span> 
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-md-4  ">
                                         <img src="assets/img/logon.png" style={{size:"50%" }} className="text-center" alt="" />
                                    </div>
                                </div>
                                </div>
                                {/* div close contact */}
                            </div>
                        </section >
                    </div>
                    </div>
                    {/* close part left */}

                    <div className="col-lg-6 col-md-4 right">
                            <div className="faqs-sidebar pos-rel ">
                                <h4 class="text-center">MY INFORMATION</h4>
                                <section id="tabs" className="tabs">
                                    <div className="container">
                                        <ul className="nav nav-tabs row d-flex font-italic">
                                            <li className="nav-item col-6">
                                                <a className="nav-link active show " data-toggle="tab" href="#tab-1">
                                                    <h4 className="d-none d-lg-block">Private Individual </h4>
                                                </a>
                                            </li>
                                            <li className="nav-item col-6">
                                                <a className="nav-link" data-toggle="tab" href="#tab-2">
                                                    <h4 className="d-none d-lg-block">Orgnization </h4>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane" id="tab-2">
                                                <div className="row">
                                                    <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                        <p className="font-italic">
                                                            <form id="toChuc" >
                                                                <p>Organization : You can deduct 60% of your donation.</p>
                                                                <p>Entreprise : l’ensemble des versements à Passerelles Numériques permet de bénéficier d’une réduction d’impôt sur les sociétés de 60% du montant de ces versements, plafonnée à 20000€ ou 5 ‰ (5 pour mille) du chiffre d'affaires annuel hors taxe de l’entreprise. En cas de dépassement de plafond, l'excédent est reportable sur les 5 exercices suivants.</p>
                                                                <div className="form-group">
                                                                    <span for="fullname">tên công ti hoặc tổ chức</span>
                                                                    <input type="text" className="form-control form-light organization" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="lastName">Last name* </span>
                                                                    <input type="text" className="form-control form-light lastName" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="firstName">First name* </span>
                                                                    <input type="text" className="form-control form-light firstName" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="emailform">Your email address* </span>
                                                                    <input type="email" className="form-control form-light emailform" id=" " ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="phoneNum">Your phone number* </span>
                                                                    <input type="number" className="form-control form-light phoneNum" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="birthday">Date of birthday* </span>
                                                                    <input type="date" className="form-control form-light birthday" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="zipCode">ZIP code* </span>
                                                                    <input type="number" className="form-control form-light zipCode" id="" ></input>
                                                                </div>
                                                                <div className="form-group">
                                                                    <span for="address">Street address* </span>
                                                                    <input type="text" className="form-control form-light address" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="city">City* </span>
                                                                    <input type="text" className="form-control form-light city " id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="country">Country* </span>
                                                                    <input type="text" className="form-control form-light country" id=" " ></input>
                                                                </div>

                                                            </form>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane active show" id="tab-1">
                                                <div className="row">
                                                    <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                                        <p className="font-italic">
                                                            <form id="caNhan" >
                                                                <p>Private individual : You can deduct<b> 66% </b>of your donation in the limit of <b>20%</b> of your taxable income</p>
                                                                <p>Particulier : Vous pouvez bénéficier d'une réduction d'impôt égale à 66% du montant de votre don, dans la limite de 20% de votre revenu imposable.</p>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="lastName">Last name* </span>
                                                                    <input type="text" className="form-control form-light lastName" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="firstName">First name* </span>
                                                                    <input type="text" className="form-control form-light firstName" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="emailform">Your email address* </span>
                                                                    <input type="email" className="form-control form-light emailform" id=" " ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="phoneNum">Your phone number* </span>
                                                                    <input type="number" className="form-control form-light phoneNum" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="birthday">Date of birthday* </span>
                                                                    <input type="date" className="form-control form-light birthday" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="zipCode">ZIP code* </span>
                                                                    <input type="number" className="form-control form-light zipCode" id="" ></input>
                                                                </div>
                                                                <div className="form-group">
                                                                    <span for="address">Street address* </span>
                                                                    <input type="text" className="form-control form-light address" id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="city">City* </span>
                                                                    <input type="text" className="form-control form-light city " id="" ></input>
                                                                </div>
                                                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                                                    <span for="country">Country* </span>
                                                                    <input type="text" className="form-control form-light country" id=" " ></input>
                                                                </div>
                                                            </form>

                                                        </p>
                                                    </div>
  
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>

                            </div>
                            
                        </div>
                        {/* ////////////////////////////////////////// */}
                              <div   className="nav-item col-12">
                              <button type="submit" className="btn btn-secondary btn-lg btn-block" id="send">Donation</button>
                            </div>
                </div>
                {/* đống class row */}
                </div>  
                {/* đống class contenter */}
            </section >
        );
    }
}
export default Donation;
