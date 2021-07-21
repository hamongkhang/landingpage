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
                    <h5 className="text-center"><b>TÀI TRỢ CỦA TÔI</b></h5>
                    <ul className="nav  row d-flex font-italic" id="item">
                      <li className="nav-item col-6  " >
                        <a className="nav-link active show" data-toggle="tab" href="#tab-amount" id="text">
                          <p className="ntthang">  <center>hỗ trợ 1 lần</center></p>

                        </a>
                      </li>
                      <li className="nav-item col-6 ">
                        <a className="nav-link" data-toggle="tab" href="#tab-month" id="text">
                          <span className="ntthang">  <center>hỗ trợ hằng tháng </center></span>

                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane active show" id="tab-amount">
                        <div className="row">
                          <center>
                            <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                              <div className="amount" id="amount">
                                <h6 className="text-center font-italic ">số tiền tài trợ:</h6>

                                <ul className="nav row">
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money1">
                                      <input className="btn btn-light" type="button" value=" 15 € " />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money2">
                                      <input className="btn btn-light" type="button" value="45 € " />
                                    </a>
                                  </li>

                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money3">
                                      <input className="btn btn-light" type="button" value="75 € " />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money4">
                                      <input className="btn btn-light" type="button" value="150 €" />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#money5">
                                      <input className="btn btn-light bbb" type="button" value="400 €" />
                                    </a>
                                  </li>
                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="money1">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">
                                          <p>giúp trang trải chi phí y tế của một sinh viên trong một năm ở Việt Nam</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane " id="money2">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                        <p className="font-italic">
                                          <p >là chi phí trang trải cho 38 giờ học IT của một sinh viên</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money3">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >là chi phí hỗ trợ sinh hoạt cho 1 sinh viên trong 2 tháng rồi</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money4">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >bao gồm khóa học tiếng Anh của một sinh viên trong một năm ở Campuchia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="money5">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >trang trải chi phí máy tính để trang bị phòng máy</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="otherAmount font-italic">  số tiền khác:
                                          <a className="click-chose" data-toggle="tab" href="#money">
                                    <center> <input type="number" className="form-control-sm form-light " id="otherAmonut"></input></center>
                                  </a>
                                </div>

                                <div className="tab-content">
                                  <div className="tab-pane" id="money">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">số tiền tài trợ của bạn sẽ góp phần hỗ trợ phát triển của các bạn sinh viên PNV</p>
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
                                <h6 className="text-center font-italic">hỗ trợ hằng tháng với số tiền: </h6>

                                <ul className="nav row">
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly1">
                                      <input className="btn btn-light " type="button" value=" 15 € " />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly1">
                                      <input className="btn btn-light" type="button" value="25 € " />
                                    </a>
                                  </li>

                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly3">
                                      <input className="btn btn-light" type="button" value="50 € " />
                                    </a>
                                  </li>
                                  <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly3">
                                      <input className="btn btn-light" type="button" value="75 €  " />
                                    </a>
                                  </li>
                                  {/* <li className="nav-item col-2">
                                    <a className="click-chose" data-toggle="tab" href="#monthly3">
                                      <input className="btn btn-secondary bbb" type="button" value="400 €" />
                                    </a>
                                  </li> */}
                                </ul>

                                <div className="tab-content">
                                  <div className="tab-pane" id="monthly1">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">
                                          <p >trang trải học phí cho một sinh viên ở Việt Nam trong một năm</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane " id="monthly2">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0" >
                                        <p className="font-italic">
                                          <p >bao ăn cho một sinh viên trong một tháng ở Philippines</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="monthly3">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >trang trải chi phí ăn ở cho 16 sinh viên trong một tháng ở Campuchia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tab-pane" id="monthly4">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-2 mt-lg-0">
                                        <p className="font-italic">
                                          <p >bao gồm các lớp học tiếng Anh cho 6 học sinh trong một tháng ở Campuchia</p>
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                </div>


                                <div className="otherAmount font-italic">  số tiền khác:
                                          <a className="click-chose" data-toggle="tab" href="#monthly">
                                    <center> <input type="number" className="form-control-sm form-light " id="otherAmonut2"></input></center>
                                  </a>
                                </div>
                                <div className="tab-content">
                                  <div className="tab-pane" id="monthly">
                                    <div className="row">
                                      <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                                        <p className="font-italic">số tiền tài trợ của bạn sẽ góp phần hỗ trợ phát triển của các bạn sinh viên PNV</p>
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
                  <div id="form2_child" className="font-italic">
                    <h6 className="text-center sumary"><b>TỔNG HỢP</b></h6>
                    <div className="table-responsive">
                      <p>Bạn có thể tạo ra sự khác biệt và thay đổi cuộc sống của những
                        thanh niên có hoàn cảnh khó khăn bằng cách hỗ trợ tổ chức Passerelles numériques.</p>
                      <p>sự hỗ trợ của các bạn sẽ giúp sinh viên PNV "nuôi hi vọng" và thực hiện hóa "ước mơ" của minh.</p>
                      <p> chúng tôi rất trân trọng mọi sự giúp đỡ dù là 10,000 hay 50,000 </p>
                    </div>
                  </div>
                </div>
                {/* end form 2 */}
                {/* form 3 là form contact */}
                <div id="form3">
                  <div id="form3_child">
                    <h5 className="text-center"><b>LIÊN HỆ VỚI CHÚNG TÔI</b></h5>
                    <p className="font-italic text-center">
                      31, rue de l'Ourcq 75019 Paris <br />
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
                    <h5 class="text-center"><b>THÔNG TIN CỦA BẠN</b></h5>



                    <ul className="nav row d-flex font-italic" id="item2">
                      <li className="nav-item col-6">
                        <a className="nav-link active show " data-toggle="tab" href="#tab-1" id="text">

                          <p className="ntthang"><center>Cá nhân </center></p>
                        </a>
                      </li>
                      <li className="nav-item col-6">
                        <a className="nav-link" data-toggle="tab" href="#tab-2" id="text">
                          <p className="ntthang">  <center>Tổ chức</center></p>
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane" id="tab-2">
                        <div className="row">
                          <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                            <p className="font-italic">
                              <form id="toChuc" >

                                <div className="form-group">
                                  <span for="fullname">tên công ti hoặc tổ chức</span>
                                  <input type="text" className="form-control form-light organization" id="" ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }} >
                                  <span for="lastName">tên* </span>
                                  <input type="text" className="form-control form-light lastName" id="" ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="firstName">họ* </span>
                                  <input type="text" className="form-control form-light firstName" id="" ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="emailform">địa chỉ email* </span>
                                  <input type="email" className="form-control form-light emailform" id=" " ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="phoneNum">số điện thoại* </span>
                                  <input type="number" className="form-control form-light phoneNum" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="birthday">ngày sinh* </span>
                                  <input type="date" className="form-control form-light birthday" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="zipCode">ZIP code* </span>
                                  <input type="number" className="form-control form-light zipCode" id="" ></input>
                                </div>
                                <div className="form-group">
                                  <span for="address">địa chỉ (đường)* </span>
                                  <input type="text" className="form-control form-light address" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="city">thành phố (huyện)* </span>
                                  <input type="text" className="form-control form-light city " id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="country">Nước* </span>
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

                                <div className="form-group" style={{ width: '50%', float: 'left' }} >
                                  <span for="lastName">tên* </span>
                                  <input type="text" className="form-control form-light lastName" id="" ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="firstName">họ* </span>
                                  <input type="text" className="form-control form-light firstName" id="" ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="emailform">địa chỉ email* </span>
                                  <input type="email" className="form-control form-light emailform" id=" " ></input>
                                </div>
                                <div className="form-group" style={{ width: '50%', float: 'left' }}>
                                  <span for="phoneNum">số điện thoại* </span>
                                  <input type="number" className="form-control form-light phoneNum" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="birthday">ngày sinh* </span>
                                  <input type="date" className="form-control form-light birthday" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="zipCode">ZIP code* </span>
                                  <input type="number" className="form-control form-light zipCode" id="" ></input>
                                </div>
                                <div className="form-group">
                                  <span for="address">địa chỉ (đường)* </span>
                                  <input type="text" className="form-control form-light address" id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="city">thành phố (huyện)* </span>
                                  <input type="text" className="form-control form-light city " id="" ></input>
                                </div>
                                <div className="form-group" >
                                  <span for="country">Nước* </span>
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
                  <button type="submit" className="btn btn-secondary btn-lg btn-block donnnn" id="send">Tài trợ</button>
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