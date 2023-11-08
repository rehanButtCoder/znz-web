import { Col, Container, Row } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import style from "./Testimonials.module.css"

function Testimonials() {
  const userDataTestimonial = [
    {
      name: "Edward",
      body: "My kid has been enjoying the basketball lessons from Jose. He gets the one-on-one coaching and even. Great way to keep him busy while his basketball skills get better.",
      taskName: "Babysitting",
      imageSec: "/asserts/images/home/c1.jpg",
    },
    {
      name: "Caroline",
      body: "My kid has been enjoying the basketball lessons from Jose. He gets the one-on-one coaching and even asks to schedule more lessons during the week. Great way to keep him busy .",
      taskName: "Coaching: Basketball",
      imageSec: "/asserts/images/home/c1.jpg",
    },
    {
      name: "Michelle",
      body: "I don't usually trust anyone else to take my dog out for a walk but this time I had time to plan ahead a busy week. I booked a college student and she was excellent, she was friendly and showed her experience with dog-walking.",
      taskName: "Pet Sitting",
      imageSec: "/asserts/images/home/c1.jpg",
    },
    {
      name: "Julian",
      body: "I used Znzto get help with the groceries and it was fast and easy. I got my delivery on time and they guy even called to ask about a substitute item on the list. Saved myself some time",
      taskName: "Grocery Delivery",
      imageSec: "/asserts/images/home/c1.jpg",
    },
    {
      name: "Michael",
      body: "Peter did an amazing job carrying boxes and loading our truck. A great guy with lots of energy. I never thought it was that easy to get a helping hand",
      taskName: "Moving",
      imageSec: "/asserts/images/home/c1.jpg",
    },
  ];

  return (
    <div className="homeUsers">
      <div className="profileHead mb-4">
        <h2>
          What Our Happy <span className="active">Users Say</span>
        </h2>
        <p className="subhead">
          We take trust and safety seriously and provide only reliable students{" "}
        </p>
        <p className="subhead">
        We take trust and safety seriously and provide only{" "}
        </p>
        <p> reliable students.</p>
      </div>
      <Container>
        <div className="homeUserSlidr homeUserSlidrNone">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {userDataTestimonial.map((singletestimonial) => (
              <SwiperSlide key={singletestimonial.name}>
                <div className={style.usrBox}>
                  <div className={style.usrBoxContainer}>
                    {/* <div>
                      <img
                        className="mt-10"
                        src="/asserts/images/home/c1.jpg"
                        alt=""
                      />
                    </div> */}
                    {/* <div className={style.usrStars}>
                      <img src="/asserts/images/star.svg" alt="" />
                      <img src="/asserts/images/star.svg" alt="" />
                      <img src="/asserts/images/star.svg" alt="" />
                      <img src="/asserts/images/star.svg" alt="" />
                      <img src="/asserts/images/star.svg" alt="" />
                    </div> */}
                    <p className="testominal-paragraph" >
                      {singletestimonial.body}
                    </p>
                  </div>
                  <div className={style.usrBoxBottom}>
                    <div>
                      <img className={style.testimonialImg} src={`${singletestimonial.imageSec}`} alt="" />
                    </div>
                    <div className="usrBoxBottomCotent">
                      <h5 className="usrBoxH">
                        {singletestimonial.name}
                      </h5>
                      <p>{singletestimonial.taskName}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
