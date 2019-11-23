import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./css/style.css";
import "./css/owl.theme.css";
import "./css/owl.carousel.css";
import "./css/fontello.css";
import "./css/font-awesome.min.css";
import "./css/font-awesome.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap.css";
import "./css/animsition.min.css";
import ScriptTag from 'react-script-tag';

const Main = () => {
  
  return (
    <>
    <ScriptTag isHydrating={true} src="./js/jquery.min.js"></ScriptTag>
    <ScriptTag isHydrating={true} src="./js/bootstrap.min.js"></ScriptTag>
    <ScriptTag isHydrating={true} src="./js/menumaker.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/jquery.sticky.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/sticky-header.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/animsition.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/animsition-script.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/owl.carousel.min.js"></ScriptTag>
    <ScriptTag isHydrating={true} type="text/javascript" src="./js/testimonial-carousel.js"></ScriptTag>
    <ScriptTag isHydrating={true} src="./js/back-to-top.js" type="text/javascript"></ScriptTag>
    <div className="hero-section">
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
            <div className="col-lg-6 col-md-6 col-sm-12  col-xs-12">
              <div className="hero-caption pinside50">
                <h3 className="text-white mb20">서바이벌 리워드형 인슈어 서비스</h3>
                <h1 className="colorb hero-title mb30 ">Re:word Ground</h1>
                <p className="hero-text">We offer free 3 day gym trial, Come and have a complimentary trial session at your favourite fitness the gym club, our ultimate goal is to make you as fit and strong as only possible.</p>
                <a href="/list" className="btn btn-default">도전하기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </>
  );
};

export default Main;
