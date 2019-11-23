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
    <>
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
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-12 col-sm-12"> <img src={require("./images/class-single.jpg")} className="img-responsive mb30" alt="Fitness Website Template" />
                        <div className="mb30">                        
                        </div>
                      </div>
                      <h1>챌린지 시작하는법</h1><br/>
                      
                    </div>
                    <p>사용하는 무기를 등록한 후  플러스 / 마이너스를 확인하고 게임을 시작하세요.</p>
                        <table className="float-middle">
                        <tr>
                          <th style={{fontSize: 150}}>
                            +
                          </th>
                          <th style={{fontSize: 200}}>
                            -
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <img src={require("./images/P.png")}></img>
                          </th>
                          <th>
                            <img src={require("./images/M.png")}></img>
                          </th>
                        </tr>
                        <tr>
                          <th>
                            <img src={require("./images/P2.png")}></img>
                          </th>
                          <th>
                            <img src={require("./images/M2.png")}></img>
                          </th>
                        </tr>
                        </table>
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
    </>
)
}

export default ListDetail;