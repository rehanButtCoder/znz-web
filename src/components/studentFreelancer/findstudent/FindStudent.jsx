import React from "react";
import style from "./findStudent.module.css";
import { Button } from "react-bootstrap";
// import Button from "../../Button";
const FindStudent = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className={style.inner__container}>
          <div className="row">
            <div className="col">
              <div className={style.typography}>
                <h2>Ready to become a student freelancer?</h2>
                <div>
                  <Button href={"#"} label={"Get Started"} />
                </div>
              </div>
            </div>

            <div className="col col-sm-6 ">
              <div className={style.image__container}>
                <img
                  src="https://www.findZnz.com/assets/images/studentfreelance/Group%20822.png"
                  alt="image"
                  width={310}
                  height={400}
                  className={style.girl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FindStudent;
