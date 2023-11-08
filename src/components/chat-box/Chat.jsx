import React from "react";
import style from "./chat.module.css";
import Messages from "./messages-compnt/Messages";
import ChatBox from "./chatbox-comp/ChatBox";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

const Chat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={`container ${style.respnsive}`}>
        <div className={style.main__container}>
          <div className={style.header}>
            <h2>
              All <span>Messages</span>
            </h2>
          </div>
          <div className={style.chat__box}>
            <div className={style.messages__container}>
              <Messages />
            </div>
            <div className={style.resp__chats}>
              <div className={style.side__chat__bar}>
                <span onClick={handleShow} className={style.toggle__chat}>
                  <img src="asserts/images/chat/chat-icon.png" alt="" />
                  <span className={style.chat__count}>3</span>
                </span>
                <p>chats</p>
              </div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Chats</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div
                    className={`style.messages__container ${style.respsive__side__chat}`}
                  >
                    <Messages />
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div className={style.chatbox__container}>
              <ChatBox noMessage={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
