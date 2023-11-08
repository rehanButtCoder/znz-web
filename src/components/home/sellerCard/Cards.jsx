import React from "react";
import "./sellerCard.css";

const Cards = (props) => {
  return (
    <div className="seller-card-main-container" key={props.sellerData?.id}>
      <div className="card-container border">
        <div className="inner-card-container">
          <div className="inner-card-content1">
            <div className="iner-c1-left">
              <div className="inner-left-img-box">
                <img src={props.sellerData?.image} alt="dummyImg" />
              </div>
              <div className="title-box">
                <p> </p>
              </div>
              <p className="payment-box-p-hr">${props.sellerData?.hourly_rate}/hr</p>
            </div>
            <div className="iner-c1-right">
              <div className="card-seller-name">
                <h5>
                  {props.sellerData?.first_name} {props.sellerData?.last_name}
                </h5>
              </div>
              <div className="cntry-cntnt">{props.sellerData?.country?.country}</div>
              <div className="seller-content-level">Level 2 Seller</div>
              <div className="card-yellow-stars">
                <img src="/asserts/images/seller-card/Star.png" alt="#" />
                <img src="/asserts/images/seller-card/Star.png" alt="#" />
                <img src="/asserts/images/seller-card/Star.png" alt="#" />
                <img src="/asserts/images/seller-card/Star.png" alt="#" />
                <img src="/asserts/images/seller-card/Star3.png" alt="#" />
              </div>
            </div>
          </div>
          <div className="inner-card-content2">
            <div className="hash-tags">Hash Tags</div>
            <div className="skills">
              <span className="all-skill">Designer</span>
              <span className="all-skill">Developer</span>
              <span className="all-skill">App designer</span>
            </div>
            <div className="about-cntnt-seller">
              <div className="about-top-hdr">About me</div>
              <div className="about-m-cntnt">
                Morbi et placerat lorem. In nec dui mattis, iaculis nulla et,
                scelerisque metus. Donec id euismod erat..
              </div>
            </div>
          </div>
          <div className="inner-card-content3">
            <span className="book-now-svd-job">Book Now</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
