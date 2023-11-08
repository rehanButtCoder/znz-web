import React from "react";
import style from "./chatting.module.css";
const ChattingArea = () => {
  return (
    <>
      {/* sender  */}
      <div className={style.main__container}>
        <div className={style.message}>
          <div>
            <img src="asserts/images/chat/chat-person.jpeg" alt="" />
            <span>Hello, How are you?</span>
          </div>
          <span>03:41 PM</span>
        </div>
        {/* replyer  */}
        <div className={style.reply__container}>
        <div className={`${style.message} ${style.reply}`}>
          <div>
            <span>Hello, How are you?</span>
            <img src="asserts/images/chat/chat-person.jpeg" alt="" />
          </div>
          <span>03:41 PM</span>
        </div>
        </div>
      </div>
    </>
  );
};

export default ChattingArea;
