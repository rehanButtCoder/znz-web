import React from "react";
import Style from "./jobforu.module.css";
const JobCard = ({ title, location, jobType }) => {
  return (
    <>
      <div className={Style.card}>
      <div className={Style.card__container}>
        <div>
          <div className={Style.typography}>
            <h2>{title}</h2>
            <span>
              <img src="asserts/images/jobforyou/flag.png" alt="" />
            </span>
          </div>
          <div className={Style.slug__container}>
            <span className={Style.slug}>UI/UX</span>
            <span className={Style.slug}>Designer</span>
            <span className={Style.slug}>Remote Job</span>
          </div>
        </div>
        <div className={Style.location__time}>
          <div className={Style.location}>
            <svg
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.25"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.38416 4.38213e-05C11.8705 0.0120453 14.2468 1.09218 15.985 2.98841C17.7342 4.89665 18.7133 7.47696 18.7023 10.1533V10.2133C18.6363 13.8497 16.7661 17.1982 14.4338 19.8145C13.1136 21.2907 11.6504 22.5988 10.0552 23.703C9.62619 24.099 8.99912 24.099 8.57006 23.703C6.20477 22.0228 4.11451 19.9105 2.4203 17.4502C0.935116 15.3139 0.0880109 12.7456 0 10.0693C0.0220027 4.4886 4.22452 -0.0119577 9.38416 4.38213e-05ZM9.38417 13.5141C10.1653 13.5141 10.9134 13.19 11.4634 12.6019C12.0355 11.9899 12.3556 11.175 12.3556 10.3217C12.3556 8.54544 11.0234 7.11727 9.38417 7.11727C7.74497 7.11727 6.4248 8.54544 6.4248 10.3217C6.4248 12.0751 7.72297 13.4901 9.35117 13.5141H9.38417Z"
                fill="black"
              />
            </svg>
            {location}
          </div>
          <div className={Style.location}>
            <img src="asserts/images/jobforyou/clock.png" alt="clock" />
            {jobType}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default JobCard;
