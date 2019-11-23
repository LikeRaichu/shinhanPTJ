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


const Main = () => {
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
          <div className="hero-section">
            <div className="header">
              {/* navigation */}
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-6">
                    <div className="logo">
                      <a href="index.html"><img src="./images/logo.png" alt="" /></a>
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
                    <h1 className="hero-title">GET A 3 DAy FREE GYM Trial</h1>
                    <p className="small-caps mb30 text-white">WANT TO TRY OUT OUR GYM FREE?</p>
                    <p className="hero-text">We offer free 3 day gym trial, Come and have a complimentary trial session at your favourite fitness the gym club, our ultimate goal is to make you as fit and strong as only possible.</p>
                    <a href="classes-list.html" className="btn btn-default">View ALL Classes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* back to top icon */}
          <a href="#0" className="cd-top" title="Go to top">Top</a>
          {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
          {/* Include all compiled plugins (below), or include individual files as needed */}
          {/* sticky header */}
          {/* animsition */}
          {/* testimonial-carousel*/}
          {/* Back to top script */}
        </div>
  );
};

export default Main;
