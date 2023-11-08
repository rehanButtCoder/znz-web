import React from "react";
import style from "./profileCard.module.css";
const ProfileCard = () => {
  return (
    <div className={style.card__container}>
      <div className={style.card__profile}>
        <div className={style.profile__container}>
          <div className={style.profile__img}>
            <img src="https://spaarrow-app-bucket.s3.us-east-2.amazonaws.com/images/gNMMBwSNDP0h0hao1jJGuCdZJYmNoa5buITfjSuE.jpg" alt="profile_img" />
          <img src="https://www.findsparrow.com/assets/images/badges/bronzec.svg" alt="levelTag" width={53} height={36} />
          </div>
          <div className={style.profile__head}>
            <h3 className={style.title}>Bastian B 28</h3>
            <p className={style.title__para}>Menlo College</p>
          </div>
          <div className={style.stars}>
            <div>
              <span className={style.star}>⭐</span>
              <span className={style.star}>⭐</span>
              <span className={style.star}>⭐</span>
              <span className={style.star}>⭐</span>
              <span className={style.star}>⭐</span>
            </div>
          </div>
          <div className={style.rate_per_hour}>&30/hr</div>
          <div className={style.about__me}>
            <h4 className={style.about__title}>About me</h4>
            <p className={style.about__para}>
              I can help your children improve their skills in golf or tennis
              with my eighth years of experience in both. I am also very
              health-minded and would love to do any outdoor activities with
              your kids to help them stay active. In case you need help with
              something else, I most likely can do that too.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
