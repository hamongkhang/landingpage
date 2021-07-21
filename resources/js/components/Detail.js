import axios from 'axios';
import React, { Component } from "react";
import Milestone from "./Milestone";
import Impact from "./Impact";
import Admission from "./Admission";


class Detail extends Component {




  render(){
    return(
    <section id="details" className="details">
    <div className="container">
      <div className="row content">
        <div className="col-md-4" >
          <img src="assets/img/details-1.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 pt-4"  >
          <h3>Những cột mốc quan trọng.</h3>
          <p className="font-italic">
           Chúng tôi đã hoạt động hơn 10 năm, và sau đâu là những cột mốc quan trọng trong suốt quãng thời gian qua:
          </p>
<Milestone />
        </div>
      </div>
      <div className="row content">
        <div className="col-md-4 order-1 order-md-2" >
          <img src="assets/img/details-2.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 pt-5 order-2 order-md-1"  >
          <h3>Tác động xã hội</h3>
         <Impact />
        </div>
      </div>
      <div className="row content">
        <div className="col-md-4" >
          <img src="assets/img/details-3.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 pt-5"  >
          <h3>Tuyển sinh</h3>
          <Admission />
        </div>
      </div>
      <div className="row content">
        <div className="col-md-4 order-1 order-md-2" >
          <img src="assets/img/details-4.png" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 pt-5 order-2 order-md-1"  >
          <h3>Chương trình đào tạo và giáo dục.</h3>
          Passerelles numériques Việt Nam hiện đang phối hợp với trường Cao đẳng Nghề Đà Nẵng để thiết kế và đào tạo khung chương trình học cho sinh viên. Khi tốt nghiệp, sinh viên của chúng tôi nhận được bằng cao đẳng được công nhận bởi Bộ Lao động – Thương binh và Xã hội, cùng một chứng chỉ do Passerelles numériques cấp.

<br></br>
<br></br>
Phương pháp giáo dục mang tính chuyên sâu và toàn diện của chúng tôi hướng đến việc phát huy tối đa khả năng làm việc của sinh viên. Ngoài kĩ năng chuyên môn, các em còn học kĩ năng mềm và kĩ năng sống, bởi chúng tôi tin rằng đó là những yếu tố quan trọng cho sự phát triển bản thân sinh viên và giúp các em trở thành các kĩ sư CNTT đủ tài và đức trong tương lai. Điều này đồng nghĩa với việc sẽ đảm bảo cho các em có thể kiếm được công việc ổn định, và đủ khả năng để tự mình đưa bản thân và gia đình thoát khỏi vòng nghèo đói luẩn quẩn.
              <section id="tabs" className="tabs">
        <div className="container"  >
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-4">
              <a className="nav-link active show" data-toggle="tab" href="#detail1">
                <i id="iconcon" className="ri-gps-line" />
                <h4 className="d-none d-lg-block">Chương trình đào tạo và thực hành thiết thực</h4>
              </a>
            </li>
            <li className="nav-item col-4">
              <a className="nav-link" data-toggle="tab" href="#detail2">
                <i className="ri-body-scan-line" />
                <h4 className="d-none d-lg-block">Đào tạo bài bản các kĩ năng chuyên nghiệp</h4>
              </a>
            </li>
            <li className="nav-item col-4">
              <a className="nav-link" data-toggle="tab" href="#detail3">
                <i className="ri-sun-line" />
                <h4 className="d-none d-lg-block">Chương trình giáo dục phát triển cá nhân</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active show" id="detail1">
              <div className="row">
                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0"   data-aos-delay={100}>
                  <p>
                  Tập trung chủ yếu vào phát triển phần mềm trên ngôn ngữ Java và PHP với những nền tảng mới nhất (Web, di động) thông qua thực hành các dự án thực tế.
                  <br></br>
<br></br>
Sinh viên tham gia chương trình học cấp chứng chỉ về kiểm thử.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center"   data-aos-delay={200}>
                  <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="detail2">
              <div className="row">
                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p className="font-italic">
                  Passerelles numériques Vietnam cũng cung cấp một chương trình đào tạo bổ sung chuyên sâu với cường độ cao để nâng cao cơ hội tìm việc làm cho sinh viên sau tốt nghiệp. Chương trình được thiết kế nhằm đáp ứng được nhu cầu tuyển dụng của doanh nghiệp, tập trung chủ yếu vào thực hành bằng các đồ án thực tế, tiếng Anh và kĩ năng mềm (tư duy logic, tính tự chủ, tính chủ động,…)
                  <br></br>
<br></br>
Toàn bộ chương trình đào tạo bao gồm:
<br></br>
<br></br>
50% Lí thuyết và thực hành CNTT
<br></br>
<br></br>
25% Tiếng Anh
<br></br>
<br></br>
25% Kĩ năng mềm
<br></br>
<br></br>
2 kì Thực tập
<br></br>
<br></br>
Tiếng Anh là chương trình học trọng tâm trong suốt 3 năm đào tạo. PNV hướng đến đầu ra TOEIC 500+, đảm bảo sinh viên thành thạo hai kĩ năng nghe và đọc. Ngoài ra, sinh viên liên tục được tham gia vào các lớp rèn luyện phát âm và giao tiếp tiếng Anh với cường độ cao, giúp các em có đủ vốn từ vựng IT để tự tin giao tiếp với người nước ngoài.
<br></br>
<br></br>
Kĩ năng mềm đóng vai trò chiến lược trong chương trình đào tạo, trang bị cho sinh viên những kĩ năng cần thiết để có thể làm việc hiệu quả tại công ty cũng như phát triển sự nghiệp bền vững với sự hỗ trợ từ các công cụ Coggle, Trello, hay Google-suite. 4 học phần Phương pháp Học tập, Kĩ năng Xin việc, Tinh thần Chuyên nghiệp và Tư duy được xây dựng để đảm bảo các em sinh viên có thể được tuyển dụng bởi các công ty tốt sau tốt nghiệp.
<br></br>
<br></br>
Sinh viên có cơ hội thực hành những kiến thức và kĩ năng đã học trong 2 kì thực tập:
<br></br>
<br></br>
Năm 2: Thực tập 2 tháng để hiểu thêm về môi trường làm việc thực tế.
<br></br>
<br></br>
Năm 3: Thực tập 5 tháng để áp dụng các kĩ năm kĩ thuật và kĩ năng mềm vào dự án thực tế như bước đệm để bước vào thế giới chuyên nghiệp trong tương lai

                  </p>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="detail3">
              <div className="row">
                <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0">
                  <p className="font-italic">
                  Để chuẩn bị cho sinh viên trở thành những người trẻ độc lập và tự chủ, chúng tôi đã xây dựng một chương trình phát triển cá nhân xoay quanh các giá trị của PN: Tin cậy, Trách nhiệm, Đoàn kết, Tôn trọng và Không ngừng Đổi mới.
                  <br></br>
<br></br>
Khi học tập tại PN, sinh viên sẽ cùng nhau sinh hoạt tại các ký túc xá, gần trung tâm đào tạo. Các em sẽ tự làm chủ và chịu trách nhiệm với cuộc sống của mình, từ việc quản lý tài chính, bao gồm chi tiêu ăn uống, điện, nước, phân công lao động đến giải quyết những mâu thuẫn nội bộ hay hỗ trợ giúp đỡ lẫn nhau.
<br></br>
<br></br>
Với mục tiêu giúp sinh viên hoàn toàn tập trung vào việc học, PN trang trải tất cả các chi phí bao gồm:
<br></br>
<br></br>
Chi phí đào tạo: học phí, lớp phụ đạo, trang thiết bị,…
<br></br>
<br></br>
Chi phí sinh hoạt: chi phí nhà ở và trang thiết bị, chi phí ăn uống, phương tiện đi lại (mỗi sinh viên nhận được một chiếc xe đạp và một mũ bảo hiểm), chăm sóc sức khỏe và bảo hiểm y tế.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  </section>
    );
}}
export default Detail;