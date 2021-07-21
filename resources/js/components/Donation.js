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
          <div id="donation2" className="collapse" data-parent=".donationcss-list">
            <a id="close" data-toggle="collapse" href="#donation2" className="collapsed">
              X
            </a>

            <div className="row " id="donation">
              <div className="col-sm-6 ">
                {/* form 1 là form choose amount money donate */}
                <div id="form1">
                  <div id="form1_child">
                    <h6 className="text-center"><b>MY DONATION</b></h6>
                    <ul className="nav  row d-flex font-italic" id="item">
                      <li className="nav-item col-5  " >
                        <a className="nav-link active show" data-toggle="tab" href="#tab-amount" id="text">
                          <center>Donation amount</center>
                        </a>
                      </li>
                      <li className="nav-item col-7 ">
                        <a className="nav-link" data-toggle="tab" href="#tab-month" id="text">
                          <center>Monthly donation amount</center>
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane active show" id="tab-amount">
                        <div className="row">
                          <center>
                            <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                              <div className="amount" id="amount">
                                <h6 className="text-center font-italic ">Donation amount</h6>

                                <ul className="nav row">
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money1">
                                      <input className="btn btn-secondary" type="button" value="$60" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money2">
                                      <input className="btn btn-secondary" type="button" value="$70" />
                                    </a>
                                  </li>

                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money3">
                                      <input className="btn btn-secondary" type="button" value="$80" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money4">
                                      <input className="btn btn-secondary" type="button" value="$90" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money5">
                                      <input className="btn btn-secondary" type="button" value="$50" />
                                    </a>
                                  </li>
                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="money1">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">
                                          <p >1cover college fees for one student in Vietnam for one year</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane " id="money2">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                        <p className="font-italic">
                                          <p >2cover the food for a student for a month in the Vietnam</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money3">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >3cover the food for a student for a month in the Vietnam</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money4">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >4cover English classes for 6 students for one month in Cambodia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money5">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >5cover English classes for 6 students for one month in Cambodia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="otherAmount font-italic">  other amount:
                                          <a className="click-chose" data-toggle="tab" href="#money">
                                    <input type="number" className="form-control form-light" id="otherAmonut"></input>
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
                          </center>
                        </div>
                      </div>

                      <div className="tab-pane" id="tab-month">
                        <div className="row">
                          <center>
                            <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                              <div className="amount" id="amount">
                                <h6 className="text-center font-italic">Monthly donation amount</h6>

                                <ul className="nav  row">
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly1">
                                      <input type="button" className="btn btn-secondary" value="$60" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly1">
                                      <input type="button" className="btn btn-secondary" value="$60" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly2">
                                      <input type="button" className="btn btn-secondary" value="$70" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">

                                    <a className="click-chose" data-toggle="tab" href="#monthly3">
                                      <input type="button" className="btn btn-secondary" value="$80" />
                                    </a>

                                  </li>
                                  <li className="nav-item col-2">

                                    <a className="click-chose" data-toggle="tab" href="#monthly4">
                                      <input className="btn btn-secondary" type="button" value="$90" />
                                    </a>

                                  </li>

                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="monthly1">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">
                                          <p >1cover college fees for one student in Vietnam for one year</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane " id="monthly2">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                        <p className="font-italic">
                                          <p >2cover the food for a student for a month in the Vietnam</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="monthly3">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >3cover the food for a student for a month in the Vietnam</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="monthly4">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >4cover English classes for 6 students for one month in Cambodia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                </div>

                                <div className="otherAmount font-italic"> <span>other amount:
                                  </span>
                                  <a className="click-chose" data-toggle="tab" href="#monthly">
                                    <input type="number" className="form-control form-light" id="otherAmonut"></input>
                                  </a>
                                </div>

                                <div className="tab-content">
                                  <div className="tab-pane" id="monthly">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">Your donation will only cost you 0.00 € after the tax deduction.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </center>
                        </div>



                      </div>

                    </div>
                  </div>
                </div>

                {/* end form 1 */}

                {/* form 2 là form sumary */}
                <div id="form2">
                  <div id="form2_child">
                    <h6 className="text-center sumary"><b>MY SUMMARY</b></h6>
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
                </div>
                {/* end form 2 */}
                {/* form 3 là form contact */}
                <div id="form3">
                  <div id="form3_child">
                    <h6 className="text-center"><b>CONTACT US</b></h6>
                    <p className="font-italic text-center">
                      31, rue de l'Ourcq
                                                  75019 Paris <br />
                                                  +33 1 42 00 84 89 <br />
                                                  julie.laporte@passerellesnumeriques.org <br />
                      <span >https://www.passerellesnumeriques.org/en/ <br />
                                                  https://www.facebook.com/passerelles.numeriques/</span>
                    </p>
                  </div>
                </div>
                {/* end form 3  */}
              </div>

              <div className="col-sm-6">
                {/* form information */}
                <div id="form1">
                  <div id="form1_child">
                    <h6 class="text-center"><b>MY INFORMATION</b></h6>



                    <ul className="nav row d-flex font-italic" id="">
                      <li className="nav-item col-6">
                        <a className="nav-link active show " data-toggle="tab" href="#tab-1" id="text">

                          <p className="ntthang">Private Individual</p>
                        </a>
                      </li>
                      <li className="nav-item col-6">
                        <a className="nav-link" data-toggle="tab" href="#tab-2" id="text">
                          <p className="ntthang">  <center>Organization </center></p>
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
                </div>
                {/* end form infor */}
              </div>

              <center>
                <div className="nav-item">
                  <button type="submit" className="btn btn-secondary btn-lg btn-block donnnn" id="send">Donation</button>
                </div>
              </center>
            </div>



          </div>
        </div>
      </div>
    </section >
  );
}

export default Donation;