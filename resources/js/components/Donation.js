const Donation = () => {
  return (
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
              {/* ............... */}
              <section id="donation" className="">
                <div className="title-form-donate">
                  <center><h4>Bạn ủng hộ những hoạt động của chúng tôi và muốn hỗ trợ?</h4></center>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 ">
                      <div className="faqs-sidebar pos-rel">
                        <div className="left-form" id="top-part">

                          <section id="tabs-t" className="tabs">
                            <div className="container-fluid" >

                              <div className="top-content">
                                <h6 className="text-center">MY DONATION</h6>
                                <ul className="nav nav-tabs row d-flex font-italic">
                                  <li className="nav-item col-4">
                                    <a className="nav-link active show" data-toggle="tab" href="#tab-amount">
                                      <p className="">Donation amount</p>
                                    </a>
                                  </li>
                                  <li className="nav-item col-8">
                                    <a className="nav-link" data-toggle="tab" href="#tab-month">
                                      <p className="font-italic ">Monthly donation amount</p>
                                    </a>
                                  </li>
                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="tab-amount">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <div className="amount" id="amount">
                                          <p className="font-italic">Donation amount</p>
                                          {/* <div className="row">
                                            <div className="col-3">
                                              <input type="button" className="btn btn-primary"> 20$</input>
                                            </div>
                                            <div className="col-3">
                                              <input type="button" className="btn btn-primary"> 20$</input>
                                            </div>
                                            <div className="col-3">
                                              <input type="button" className="btn btn-primary"> 20$</input>
                                            </div>
                                            <div className="col-3">
                                              <input type="button" className="btn btn-primary"> 20$</input>
                                            </div>
                                          </div> */}
                                          <ul className="nav nav-tabs row">
                                            {/* <li className="nav-item col-3">
                                              <input className="" type="button" value="$60" />
                                            </li>
                                            <li className="nav-item col-3">
                                              <input className="" type="button" value="$60" />
                                            </li>
                                            <li className="nav-item col-3">
                                              <input className="" type="button" value="$60" />
                                            </li>
                                            <li className="nav-item col-3">
                                              <input className="btn-main" type="button" value="$60" />
                                            </li> */}

                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#money">
                                                <input className="" type="button" value="$60" />
                                              </a>
                                            </li>
                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#cont-2">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                  <input className="" type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#cont-3">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                  <input className="" type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#cont-4">
                                                <a className="click-chose" data-toggle="tab" href="#money">
                                                  <input className="" type="button" value="$60" />
                                                </a>

                                              </a>
                                            </li>
                                            <li className="nav-item col-2">
                                              <a className="click-chose" href="#cont-5">
                                                <a className="click-chose" href="#money">
                                                  <input className="col-sm-3" type="button" value="$60" />
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

                                          <div className="otherAmount font-italic">  other amount:
                                          <a className="click-chose" data-toggle="tab" href="#money">
                                              <input type="number" className="form-control form-light" id="otherAmonut" style={{ width: '100px' }}></input>
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
                                        <div className="month" id="monthn">
                                          <p className="font-italic text-center">Monthly donation amount</p>
                                          <ul className="nav nav-tabs row d-flex">
                                            <li className="nav-item col-3">
                                              <a className="click-chose " data-toggle="tab" href="#content-1">
                                                <a className="click-chose" data-toggle="tab" href="#money-2">
                                                  <input type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#content-2">
                                                <a className="click-chose" data-toggle="tab" href="#money-2">
                                                  <input type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                            <li className="nav-item col-3">
                                              <a className="click-chose" data-toggle="tab" href="#content-3">
                                                <a className="click-chose" data-toggle="tab" href="#money-2">
                                                  <input type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                            <li className="nav-item col-6">
                                              <a className="click-chose" data-toggle="tab" href="#content-4">
                                                <a className="click-chose" data-toggle="tab" href="#money-2">
                                                  <input type="button" value="$60" />
                                                </a>
                                              </a>
                                            </li>
                                          </ul>
                                          {/* ................ */}
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
                                              <span className="font-italic">other amount:  </span>
                                              <input type="number" className="form-control form-light" id="otherAmonut-2" style={{ width: '100px' }}></input>
                                            </a>
                                          </div>
                                          <div className="tab-content">
                                            <div className="tab-pane" id="money-2">
                                              <div className="row">
                                                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                                  <span className="font-italic">Your donation will only cost you 0.00 € after the tax deduction.</span>

                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          {/* ................. */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* *****month */}
                                </div>
                              </div>
                              {/* close top content */}
                              <div className="sumaryy">
                                <h6 className="text-center sumary">MY SUMMARY</h6>
                                <div className="table-responsive">
                                  <table className="font-italic">
                                    <thead className="">
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
                              </div>
                              {/* close sumaryy */}
                              <div className="container contacttt">
                                <h6 className="text-center">CONTACT US</h6>
                                <p className="font-italic">
                                  31, rue de l'Ourcq
                                                  75019 Paris <br />
                                                  +33 1 42 00 84 89 <br />
                                                  julie.laporte@passerellesnumeriques.org <br />
                                  <span >https://www.passerellesnumeriques.org/en/ <br />
                                                  https://www.facebook.com/passerelles.numeriques/</span>
                                </p>
                              </div>
                              {/* contact    */}
                            </div>
                          </section >

                        </div>
                      </div>
                    </div>
                    {/* ****************** */}
                    <div className="col-sm-6">

                      <div className="faqs-sidebar pos-rel">

                        <section id="tabs" className="tabs">
                          <div className="container  right-form">
                            <h6 class="text-center">MY INFORMATION</h6>
                            <ul className="nav nav-tabs row d-flex font-italic">
                              <li className="nav-item col-7">
                                <a className="nav-link active show " data-toggle="tab" href="#tab-1">
                                  <p className="d-none d-lg-block">Private Individual </p>
                                </a>
                              </li>
                              <li className="nav-item col-5">
                                <a className="nav-link" data-toggle="tab" href="#tab-2">
                                  <p className="d-none d-lg-block">Organization </p>
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
                    <div className="nav-item">
                      <button type="submit" className="btn btn-secondary btn-lg btn-block donnnn" id="send">Donation</button>
                    </div>
                  </div>
                  {/* đống class row */}
                </div>
                {/* đống class contenter */}
              </section >
              {/* ................... */}
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}

export default Donation;