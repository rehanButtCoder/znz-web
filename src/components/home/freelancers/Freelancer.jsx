import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "./Freelancer.css"

const Freelancer = () => {
  SwiperCore.use([Pagination, Navigation]);

  return (
    <div className="trusted">
      <Container>
        <Row>
          <Col md={6} className="paddingLft20 mainbannerTextPart">
            <h2>
              Find your <span className="active">trusted</span> <br /> assistance
            </h2>
            <p>
            Connect with people to make a difference by offering work   
            </p>
            <p> opportunities that have a positive impact on their financial  </p>
            <p> independence and personal growth. Help nurture and grow  </p>
            <p>their confidence and readiness for their academic success. </p>
            <p>Together, let's unlock their potential and inspire a generation </p>
            <p>of ambitious and capable individuals.</p>
            <Button className="button mt40" variant="warning">Read More</Button>{" "}
          </Col>
          <Col md={6} className="trustedMain">
            {/* <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                922: {
                  slidesPerView: 1,
                },
              }}
              slidesPerView={1}
              spaceBetween={30}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper> */}
            <img src="/asserts/images/home/trusted.jpeg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Freelancer;
