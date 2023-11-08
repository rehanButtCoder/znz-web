import React from "react";
import style from "./NFooter.module.css";
import { Link } from "react-router-dom";
import Facbook from "../../utils/images/fb.png";
import Instagram from "../../utils/images/instagram.png";
import Linkden from "../../utils/images/linkden.png";
import Message from "../../utils/images/Message.png";
import LocationIcon from "../../utils/images/Location-icon.png";
import MobileIcon from "../../utils/images/Mobile.png";
const Footer = () => {
  return (
    <React.Fragment>
      <div className={style.main__container}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5 mt-4 mt-md-0">
              <div className={style.first__colm}>
                <div>
                  <img
                    className={style.logoFooter}
                    src="/asserts/images/logo/logoBg.jpg"
                    alt=""
                  />
                </div>
                <div className={style.footer__para}>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo conUt enim ad minim
                    veniam, quis nostrud exercitation ullamco.
                  </p>
                </div>
                <div className={style.firstCol__icon}>
                  <span>
                    <img src={Facbook} alt="facebook" />
                  </span>
                  <span>
                    <img src={Instagram} alt="instagram" />
                  </span>
                  <span>
                    <img src={Linkden} alt="Linkden" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className={style.service__section}>
                <h4>Important Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/pserPledge">Services</Link>
                  </li>
                  <li>
                    <Link to="/pserPledge">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/termsOfServices">Term & Condition</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className={style.last__colm}>
                <div>
                  <h4>Contact Us</h4>
                </div>
                <div className={style.lastSecIcons__container}>
                  <span>
                    <span className={style.lastCol__icon}>
                      <img src={Message} alt="facebook" />
                    </span>
                    <p>
                      Email Us <br /> 26361243671243
                    </p>
                  </span>
                  <span>
                    <span className={style.lastCol__icon}>
                      <img src={MobileIcon} alt="Mobile" />
                    </span>
                    <p>
                      Call Us <br />
                      26361243671243
                    </p>
                  </span>
                  <span>
                    <span className={style.lastCol__icon}>
                      <img src={LocationIcon} alt="location-icon" />
                    </span>
                    <p>
                      Visit Us <br />
                      26361243671243{" "}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className={style.hr}/>
          <span className={style.copyRight}>Copyright @ Design By Muhammad Ali</span>
        </div>
      </div>{" "}
      
    </React.Fragment>
  );
};

export default Footer;
