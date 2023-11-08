import React from "react";
import style from "./chat.module.css";
import SingleCht from "../messages-compnt/singleChat/SingleCht";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "../../../App.css";
import ChattingArea from "./chatting/ChattingArea";
const ChatBox = ({ noMessage }) => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      {noMessage ? (
        <div className={style.no__chat}>
          <img src="asserts/images/chat/no-chat.svg" alt="" />
          <p>Select a chat to read messages</p>
        </div>
      ) : (
        <div className={style.main__container}>
          <div className={style.chat__header}>
            <div>
              <SingleCht
                userName={"Sher Alam"}
                image={"asserts/images/chat/chat-person.jpeg"}
                status={"offline"}
                bio={"last seen 10 minutes ago"}
              />
            </div>
            <div>
              <Dropdown
                className={`chat__menu__dropdown ${style.chat__menu__dropdown}`}
              >
                <Dropdown.Toggle className={style.chat__menu}>
                  <img src="asserts/images/chat/chat-dots.png" alt="" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Add to archieve
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                  <hr />
                  <Dropdown.Item href="#/action-3">Block</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          {/* chatting area  */}
          <ChattingArea/>
          {/* send chat  */}
          <div className={style.send__chat__container}>
            <button className={style.emoji__btn}>
              <img src="asserts/images/chat/emoji.png" alt="" />
            </button>
            <div className={style.chat__input}>
            <input type="text"  placeholder="type something"/>
            </div>
            <button className={style.send__btn}>
              <img src="asserts/images/chat/send-icon.png" alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
