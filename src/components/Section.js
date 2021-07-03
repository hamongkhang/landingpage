const Section = () => {
  return (
    <section id="about" className="about">
      <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox watch-btn mb-4" data-vbtype="video" data-autoplay="true" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>Bối cảnh</h3>
            <p>Passerelles numériques đã khảo sát thực tế tình hình kinh tế xã hội của Việt Nam trước khi bắt đầu hoạt động. Dữ liệu cho thấy mặc dù có sự tăng trưởng mạnh về kinh tế, phần lớn người dân ở các vùng sâu vùng xa miền Trung và Tây Nguyên vẫn còn gặp nhiều khó khăn và không có nhiều cơ hội tiếp cận giáo dục bậc cao sau THPT.

              Trong khi đó, với sự hỗ trợ và khuyến khích mạnh mẽ của chính phủ, Đà Nẵng được xác định trở thành trung tâm CNTT trong tương lai. Vì vậy, đây là nơi lý tưởng để sinh viên chúng tôi tìm kiếm cơ hội việc làm ổn định sau khi tốt nghiệp.</p>

            <section id="boi" className="boi section-bg">
              <div className="container">
                <div className="boi-list">
                  <ul>
                    <li data-aos="fade-up">
                      <div className="goals">
                        <img src="assets/img/tải xuống.png" />
                        <a data-toggle="collapse" className="collapse" href="#boi1"> it laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                          <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                      </div>
                      <div id="boi1" className="collapse show" data-parent=".boi-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay={100}>
                      <div className="goals">
                        <img src="assets/img/tải xuống (3).png" />
                        <a data-toggle="collapse" className="collapsed" href="#boi2"> delit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                          <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                      </div>
                      <div id="boi2" className="collapse" data-parent=".boi-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>
                    <li data-aos="fade-up">
                      <div className="goals">
                        <img src="assets/img/tải xuống (1).png" />
                        <a data-toggle="collapse" className="collapsed" href="#boi3"> laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                          <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                      </div>
                      <div id="boi3" className="collapse" data-parent=".boi-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay={400}>
                      <div className="goals">
                        <img src="assets/img/tải xuống (2).png" />
                        <a data-toggle="collapse" className="collapsed" href="#boi4"> laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                          <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                      </div>
                      <div id="boi4" className="collapse" data-parent=".boi-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </section>

            {/* <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><img src="assets/img/tải xuống.png" /></div>
            <h4 className="title"><a href>Lorem Ipsum</a></h4>
            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          </div>
          <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="bx bx-gift" /></div>
            <h4 className="title"><a href>Nemo Enim</a></h4>
            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
          </div>
          <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="bx bx-atom" /></div>
            <h4 className="title"><a href>Dine Pad</a></h4>
            <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
          </div>
         */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section;