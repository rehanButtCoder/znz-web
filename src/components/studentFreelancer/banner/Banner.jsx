import React from "react";
import style from "./banner.module.css";
import { Container } from "react-bootstrap";

const Banner = (props) => {
  return (
    <React.Fragment>
      <div className={`${style.aboutMain} ${props.classContactBanner}`}>
        <Container>
          <h1 style={{color:"white",paddingLeft:"40px"}}>{props.heading}</h1>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Banner;
