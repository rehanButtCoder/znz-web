import React from "react";
import style from "./studentcard.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-stars";

const StudentCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <Row>
        <Col xs={6} md={4}>
          <div className={style.card}>
            <div className={style.student__name}>
              <div className={style.image__container}>
                <img
                  src="asserts/images/view-all-students/student.jpg"
                  alt=""
                />
                <p>UI/UX Deisgner</p>
                <span>$24/hr</span>
              </div>
              <div className={style.student__detail}>
                <h4>Adam Jon, 24 yrs.</h4>
                <p>Sweden, Australia </p>
                <span>Level 2 Seller</span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                  half={false}
                />
              </div>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </div>
  );
};

export default StudentCard;
