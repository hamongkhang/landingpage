import axios from 'axios';
import React, { Component } from "react";
class FAQ extends Component {

    constructor(props) {
      super(props)
      this.state = {
        recruitment: [],
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8000/api/recruitment/')
        .then(res => {
          this.setState({
            recruitment: res.data
          });
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
  
  
    render(){
      return( 
    <section id="faq" className="faq section-bg">
    <div className="container">
      <div className="section-title"  >
        <h2>
        PNV
        </h2>
        <p>Tuyển dụng</p>

        </div>
      <div className="faq-list">

      Nếu bạn đang tìm kiếm thử thách mới, hãy tham gia cùng chúng tôi. PN thường xuyên cần nguồn nhân lực cho các vị trí nhân viên dự án, tình nguyện viên, và thực tập sinh tại trụ sở chính tại Pháp, hoặc tại một trong các trung tâm tại Campuchia, Philippines và Việt Nam, cũng như các chi nhánh của chúng tôi tại Singapore và Hồng Kông.
<br></br>
<br></br>
Các vị trí đang tuyển dụng cho trung tâm PN tại Việt Nam. Xem thêm cơ hội nghề nghiệp của các trung tâm khác tại đây, bản tiếng Anh hoặc bản tiếng Pháp.
<br></br>
<br></br>
Chúng tôi thường xuyên tìm kiếm tình nguyện viên và thực tập sinh ( truyền thông, gây quỹ, tài chính, etc.). Bạn có thể nộp ngay hồ sơ bằng cách gửi CV và cover letter đến: missions@passerellesnumeriques.org.
        <br />
        <ul>


        {this.state.recruitment.map((re, i) => {
    return(
          <li  >
            <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" className="collapse" href={"#faq"+re.id}><h3>PN Vietnam – {re.responsibility} ({re.status})</h3>
<p>{re.created_at} | Cùng tham gia, Việt Nam
</p><i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
            <div id={"faq"+re.id} className="collapse" data-parent=".faq-list">
            <h4>Tổ chức: {re.organisation}</h4>
              <p>Người báo cáo: {re.reporting}</p>
              <p>Tình trạng: {re.status}</p>
              <p>Vị trí: {re.location}</p>
              <p>Hoàn cảnh: {re.background}</p>
              <p>Nhiệm vụ: {re.responsibility}</p>
              <p>Kỹ năng: {re.skill}</p>
              <p>Ngôn ngữ: {re.language}</p>
            </div>
          </li>)})}




         
        </ul>
      </div>
    </div>
  </section>
    );
}
}
export default FAQ;