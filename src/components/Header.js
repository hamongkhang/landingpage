
const Header=()=>{
  return(
  <header id="header" className="fixed-top d-flex align-items-center header-transparent">
  <div className="container d-flex align-items-center">
    <div className="logo mr-auto">
      <h1 className="text-light"><a href="index.html"><span><img src="assets/img/logo-vi.png"  /></span></a></h1>
    </div>
  <nav className="nav navbar-expand-lg navbar-dark">
  <font><marquee direction="left" width="1100px" height="32px" style={{color:"white"}}>Từ năm 2010, Passerlles numériques Việt Nam (PNV) cung cấp học bổng toàn phần chất lượng cao về công nghệ thông tin kéo dài 3 năm với các chuyên ngành Kiểm thử Tự động, Thiết kế Web hoặc Lập trình thiết bị di động. Mỗi chuyên ngành đều được giảng dạy một cách tổng hợp, bao gồm cả kĩ năng cứng và mềm đi kèm với một chương trình phát triển cá nhân thiết thực.</marquee></font>
    <div className="language mr-auto">
      <a href="index.html"><span><img src="assets/img/300px-Flag_of_the_United_Kingdom.svg.png"  /></span></a>
     <a href="index.html"><span><img src="assets/img/quoc-ky-viet-nam.jpg"  /></span></a>
      <a href="index.html"><span><img src="assets/img/Phap.jpg"  /></span></a>
    </div>
      <ul>
        <li className="active"><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
  );
}
export default Header;