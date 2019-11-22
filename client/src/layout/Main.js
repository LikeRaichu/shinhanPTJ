import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Main = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "12.5%"}}>
      <img
        data-v-0362bbb6=""
        id="hero-video"
        alt="Ethereum.org - Light"
        width="380"
        height="380"
        src="http://i2.linkoooo.com/1908/20190824100922_9b0e8979e5b41fe2968123d66f23085b_i3ao.gif"
        playsinline=""
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        class="mx-auto inline-block"
      ></img>
      {/* <img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;"></img> */}
      </div>
  );
};

export default Main;
