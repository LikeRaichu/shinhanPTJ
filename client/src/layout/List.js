import React from 'react'
import "./css/style.css";
import "./css/owl.theme.css";
import "./css/owl.carousel.css";
import "./css/fontello.css";
import "./css/font-awesome.min.css";
import "./css/font-awesome.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap.css";
import "./css/animsition.min.css";

const List = () => {
      return (
        <div>
          <div className="top-bar">
            {/* top-bar */}
            <div className="container">
              <div className="row">
                <div className="col-md-3 hidden-sm hidden-xs bdr">
                  <div className="time-info">
                    <p className="time-text">Mon - Sat : 6 am-9pm - Sun : 8am-6pm</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 hidden-xs bdr">
                  <div className="call-info">
                    {/* call-info */}
                    <p className="call-no">+1 (800)-123-456 / 856</p>
                  </div>
                  {/* /.call-info */}
                </div>
                <div className="col-md-3 col-sm-4 hidden-xs bdr">
                  <div className="mail-info">
                    <p className="mail-text">fitnessgym@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="top-search">
                    <div className="custom-search-input">
                      <div className="input-group  ">
                        <input type="text" className="  search-query form-control" placeholder="Search" />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button"> <i className="fa fa-search" /> </button>
                        </span> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-header">
            <div className="header">
              {/* navigation */}
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="logo">
                      <a href="index.html"><img src={require("./images/logo1.png")} alt="" /></a>
                    </div>
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <div className="navigation pull-right" id="navigation">
                      <ul>
                        <li className="active"><a href="index.html" title="Home" className="animsition-link">Home</a></li>
                        <li><a href="classes-list.html" title="Classes" className="animsition-link">Classes List</a>
                          <ul>
                            <li><a href="classes-list.html" title="Classes List">classes List</a></li>
                            <li><a href="/listdetail" title="Classes Detail">classes Detail</a></li>
                          </ul>
                        </li>
                        <li><a href="blog-default.html" title="Blog" className="animsition-link">Blog Default</a>
                          <ul>
                            <li><a href="blog-default.html" title="Blog" className="animsition-link">Blog Default</a></li>
                            <li><a href="blog-single.html" title="Blog Single" className="animsition-link">Blog Single</a></li>
                          </ul>
                        </li>
                        <li><a href="testimonial.html" title="Features" className="animsition-link">Features</a>
                          <ul>
                            <li><a href="testimonial.html" title="Testimonial" className="animsition-link">Testimonial</a></li>
                            <li><a href="pricing.html" title="Pricing" className="animsition-link">Pricing</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html" title="Contact Us" className="animsition-link">Contact</a> </li>
                        <li><a href="style-guide.html" title="Style Guide" className="animsition-link">style guide</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="page-caption pinside40">
                    <h1 className="page-title">맵 선정하기</h1>
                    <p>원하는 맵에서 나만의 맞춤형 도전을 통해 다양한 리워드를 받아보자!!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-medium">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_1.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">건강한 몸 만들기</a><span>3개 | 10,000명</span> </h2>
                      <p> 건강 퀘스트를 깨라! </p><p>
                      </p><p> 끝까지 살아남는 자만이 가져가는 혜택! </p>
                      <p className="mb50">건강과 혜택을 한번에 챙기는 더블 리워드 </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_2.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">화재없는 우리집 만들기</a><span>6개월 | 5,000명</span></h2>
                      <p>화재는 누구에게나 </p>
                      <p>발생할 수 있는 위험입니다.</p>
                      <p className="mb60">예방과 안전 둘다 잡아가세요.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_3.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">365일 안전운전하기!</a><span>3개월 | 100,000명</span></h2>
                      <p>3달 동안 난 </p>
                      <p>하나의 딱지도 허용하지않는다!</p>
                      <p className="mb60">안전 서바이벌에 당신도 참여하세요.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_4.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">내 아이는 내가 지킨다!</a><span>12개월 | 5,000명</span></h2>
                      <p>나의 도전을 통해</p>
                      <p>아이의 건강과 혜택을 잡아보자!!</p>
                      <p className="mb60">아이를 위해 지금 가입해보자~</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_5.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">안전 여행가고 지원받자</a><span>6개월 | 1,000명</span></h2>
                      <p>여행을 가기위해 필요한건 뭐?</p>
                      <p>여행 보험로 안전하게 여행하고</p>
                      <p className="mb60">여행경비를 지원받자!</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="service-block outline mb30">
                    <div className="service-icon">
                      <img src={require("./images/list_6.jpg")} />
                    </div>
                    <div className="service-content pinside40">
                      <h2 className="service-title mb20"><a href="/listdetail" className="title">Group Exercise Classes</a></h2>
                      <p className="mb60">Seroins avida mietrci pretiume luctus mntum ursus hendrerit tellusutc ursus lacus bibendumrci. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer space-medium">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                  <div className="footer-logo mb30">
                    <img src="images/logo.png" className alt="Fitness Website Template" />
                  </div>
                </div>
                <div className="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-3 col-sm-3 col-xs-12">
                  <div className="footer-widget mb30">
                    <h3 className="footer-title">Contact Info</h3>
                    <ul className="listnone">
                      <li>
                        <address>
                          2687 Broadcast Drive Monroe,
                          <br /> NC 28112
                        </address>
                      </li>
                      <li>+1 (800)-123-456 </li>
                      <li>fitnessgym@gmail.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-3 col-xs-12">
                  <div className="footer-widget mb30">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="listnone">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="classes.html">Classes</a></li>
                      <li><a href="blog-default.html">News</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                      <li><a href="testimonial.html">Testimonial</a></li>
                      <li><a href="contact.html">Contactus</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="footer-widget mb30">
                    <h3 className="footer-title">Connect With us</h3>
                    <div className="footer-social"> <a href="#"><i className="fa fa-twitter" /></a> <a href="#" className="active"><i className="fa fa-facebook" /> </a>
                      <a href="#"> <i className="fa fa-google-plus" /> </a>
                      <a href="#"> <i className="fa fa-pinterest" /> </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tiny-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  Shared by <i className="fa fa-love" /><a href="https://bootstrapthemes.co">BootstrapThemes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

  export default List;