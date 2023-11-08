import React from "react";
import style from "./freelancerSignup.module.css";
const FreelancerSignup = () => {
  return (
    <React.Fragment>
      <div className={style.main__container}>
        <div className={style.signup__headings}>
          <h2>
            Any Reasons Not to <span>Sign Up?</span>
          </h2>
          <h6>
            Become part of Znzcommunity to work and earn money your way.
          </h6>
        </div>
        <div className="container">
          <div className="row">
            <div className="col order-2">
              <div className={style.image__container}>
                <img
                  src="https://www.findZnz.com/assets/images/studentfreelance/StudentFreelanceSignupmackup.png"
                  alt="image"
                  width={700}
                  height={586}
                />
              </div>
            </div>
            <div className="col order-1">
              <div className={style.signup__steps}>
                <div className={style.card}>
                  <div className={style.typography}>
                    <h4>Create your account</h4>
                    <p>
                      Create an account with information about yourself. We’ll
                      confirm your identity and verify your eligibility to use
                      the platform.{" "}
                    </p>
                  </div>
                  <div className={style.card__count}>
                    <span><h2>01</h2></span>
                </div>
                </div>
                {/* card 2  */}
                <div className={`${style.card} ${style.card__colr}`}>
                  <div className={style.typography}>
                    <h4>Create your account</h4>
                    <p>
                      Create an account with information about yourself. We’ll
                      confirm your identity and verify your eligibility to use
                      the platform.{" "}
                    </p>
                  </div>
                  <div className={`${style.card__count}`}>
                    <span className={style.count__colr}><h2>01</h2></span>
                </div>
                </div>
                {/* card 3 */}
                <div className={`${style.card} ${style.cardthre__colr}`}>
                  <div className={style.typography}>
                    <h4>Create your account</h4>
                    <p>
                      Create an account with information about yourself. We’ll
                      confirm your identity and verify your eligibility to use
                      the platform.{" "}
                    </p>
                  </div>
                  <div className={`${style.card__count} `}>
                    <span className={style.countthre__colr}><h2>01</h2></span>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FreelancerSignup;
