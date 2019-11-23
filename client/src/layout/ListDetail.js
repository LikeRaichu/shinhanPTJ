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

const ListDetail = () => {
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
                    <a href="index.html"><img src="images/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-md-9 col-sm-12">
                  <div className="navigation pull-right" id="navigation">
                    <ul>
                      <li className="active"><a href="index.html" title="Home" className="animsition-link">Home</a></li>
                      <li><a href="classes-list.html" title="Classes" className="animsition-link">Classes List</a>
                        <ul>
                          <li><a href="classes-list.html" title="Classes List">classes List</a></li>
                          <li><a href="classes-detail.html" title="Classes Detail">classes Detail</a></li>
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
                <div className="page-caption-detail pinside40">
                  <h1 className="page-title page-title-detail">건강한 '나' 만들기</h1>
                  <p>나의 건강을 증진시킬 수 있는 퀘스트를 하면서 동시에 보험료를 줄일 수 있는 생활보상형 보험</p>
                  <p>이런 분들께 추천드립니다!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="content-area">
                  <div className="row">
                    <div className="col-md-8 col-sm-12">
                      <div className="row">
                        <div className="col-md-12 col-sm-12"> <img src={require("./images/class-single.jpg")} className="img-responsive mb30" alt="Fitness Website Template" />
                          <div className="mb30">
                            <div className="col-md-4 col-sm-12">
                              <div className="row">
                                <div className="col-md-12 col-sm-12">
                                  <div className="side-nav mb30  ">
                                    <ul className="listnone sidenav">
                                      <li className="active"> <a href="#"><i className="icon-2 service-sidenav-icon " /><span className="sidenav-text">Begginers Classes</span></a></li>
                                      <li> <a href="#"><i className="icon-1 service-sidenav-icon" /><span className="sidenav-text">Women Classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-4 service-sidenav-icon" /><span className="sidenav-text">men Classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-5 service-sidenav-icon" /><span className="sidenav-text">Powerlifting classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-6 service-sidenav-icon" /><span className="sidenav-text">Advance Classes</span> </a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-6 col-xs-12">
                                  <div className="widget-cta">
                                    <div className="cta-img">
                                      <div className="cta-content pinside30">
                                        <h1 className="primary-title  ">Special offer!</h1>
                                        <small>Memberships from only </small>
                                        <h2 className="offer-price">$10.00*</h2>
                                      </div>
                                    </div>
                                    <a href="#" className="btn btn-block btn-default">Join Us NOW</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                              <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                  <div className="side-nav mb30  ">
                                    <ul className="listnone sidenav">
                                      <li className="active"> <a href="#"><i className="icon-2 service-sidenav-icon " /><span className="sidenav-text">Begginers Classes</span></a></li>
                                      <li> <a href="#"><i className="icon-1 service-sidenav-icon" /><span className="sidenav-text">Women Classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-4 service-sidenav-icon" /><span className="sidenav-text">men Classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-5 service-sidenav-icon" /><span className="sidenav-text">Powerlifting classes</span> </a></li>
                                      <li> <a href="#"><i className="icon-6 service-sidenav-icon" /><span className="sidenav-text">Advance Classes</span> </a></li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-12 col-sm-6 col-xs-12">
                                  <div className="widget-cta">
                                    <div className="cta-img">
                                      <div className="cta-content pinside30">
                                        <h1 className="primary-title  ">Special offer!</h1>
                                        <small>Memberships from only </small>
                                        <h2 className="offer-price">$10.00*</h2>
                                      </div>
                                    </div>
                                    <a href="#" className="btn btn-block btn-default">Join Us NOW</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h1>Begginers Classes</h1>
                            <p>Donec eros turpissemper nenibh velultrices pellentesque ristiam eu odio lionec consectetur nisi egetlorem dapibus graviroin posuere eros eget purus cursus dignissim molestie tellus euismtiam vulputate lorem is elementum sollicitudi uspendisse ante turpissollicitudin egeleo sitamet pharetra vehicula dihasellus ipsum efficitur, libero sit amet placerat ullamcorper risusex vehicula quamnec molestie.</p>
                            <p>Nulla lobortis interdum suscipell entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra at scelerisque id efficitur ullamcorper turpiusce et enim eu elit semper fringtiam faucibus on quamut consectetur gravida tellus sem lobortis miuis consectetur magna lorem vitae lectuone.</p>
                            <img src={require("./images/right-img.jpg")} className="alignright img-responsive" alt="" />
                            <p>Suscipell entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra ate scelerisque id efficitur ullamcorper turpiusce etes enim eu elit semper fringtiam faucibus.</p>
                            <p>Entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra ate elerisque id efficitur ullamcorper enim eu elit semper ones fringtiam faucibus turpiusce etes.Donec eros turpissemper nenibh velultrices pellentesque ristiam eu odio lionec consectetur.</p>
                            <img src={require("./images/left-img.jpg")} className="alignleft img-responsive" alt="" />
                            <p>Suscipell entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra ate scelerisque id efficitur ullamcorper turpiusce etes enim eu elit semper fringtiam faucibus.</p>
                            <p className="mb30">Entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra ate elerisque id efficitur ullamcorper enim eu elit semper ones fringtiam faucibus turpiusce etes. Nulla lobortis interdum suscipell entesque efficitur sollicitudin magnaeu vehicula libero</p>
                            <p className="mb30">Nulla lobortis interdum suscipell entesque efficitur sollicitudin magnaeu vehicula libero luctus etonec odio velit, viverra at scelerisque id efficitur ullamcorper turpiusce et enim eu elit semper fringtiam faucibus on quamut consectetur gravida tellus sem lobortis miuis consectetur magna lorem vitae lectuone. Nulla lobortis interdum suscipell entesque efficitur sollicitudin magnaeu vehicula libero.</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
    )
}

export default ListDetail;