import React from "react";
import style from "./singlechat.module.css";

const SingleCht = ({ chatCount, status, userName, bio, image,time }) => {
  const status__check = (status) => {
    switch (status) {
      case "online":
        return "#82d051";
      case "away":
        return "#EBFF00";
      case "offline":
        return "#EF2B00";
    }
  };
  return (
    <>
      <div className={style.person__message}>
        <div className={style.profile__image}>
          <div className={style.image}>
            <img src={image} alt="profile" />
            <span style={{ backgroundColor: status__check(status) }}></span>
          </div>
          <div className={style.user__name}>
            <h4>{userName}</h4>
            <span>{bio}</span>
          </div>
        </div>
        <div className={style.chat__count}>
          {chatCount ? <span>{chatCount}</span> : ""}
          <p>{time}</p>
        </div>
      </div>
      
    </>
  );
};

export default SingleCht;
