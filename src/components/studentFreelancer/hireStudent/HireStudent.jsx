import React from "react";
import style from "./hireStudent.module.css";
import { Button } from "react-bootstrap";
// import Button from '../../Button'
const HireStudent = () => {
  return (
    <React.Fragment>
      <div className={style.main__container}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={style.card}>
                <h3>
                  Say “No” to overtime & <br /> Low-Paid Salaries
                </h3>
                <p>
                  Find simple and high paying jobs that fit your schedule. We
                  offer the freedom to work whenever it’s best for you by
                  helping your local community.
                </p>
                <div>
                    <Button href={'#'} label={'Get Started'}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HireStudent;
