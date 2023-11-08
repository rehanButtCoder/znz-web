import React from "react";
import style from "./modalbody.module.css";
import { Tab, Nav } from "react-bootstrap";
const ModalBody = ({ close }) => {
  return (
    <div >
      <div className={style.title}>
        <h3>Notification </h3>
        <span onClick={close}>
          <img
            src="asserts/images/notification/notification-close.png"
            alt=""
          />
        </span>
      </div>
      <div className={style.tabs__area}>
        <div className={style.tabs}>
          <Tab.Container defaultActiveKey="tab1">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="tab1" className={style.nav__title}>
                  View All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="tab2" className={style.nav__title}>
                  Mentions
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {/* mark all read link  */}
            <div className={style.mark__all__read}>
              <img src="asserts/images/notification/mark-read.png" alt="" />
              <span>Mark all as read</span>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="tab1">
                <div className={style.content__container}>
                  <div className={style.tab__content}>
                    <div className={style.notify}>
                      <div className={style.user__image}>
                        <img
                          src="asserts/images/notification/Initials.png"
                          alt=""
                        />
                      </div>
                      <div className={style.user__notification}>
                        <span>
                          Dennis Nedry commented on Isla Nublar SOC2 compliance
                          report{" "}
                        </span>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </div>
                    <span className={style.unread}></span>
                  </div>
                  <div className={style.tab__content}>
                    <div className={style.notify}>
                      <div className={style.user__image}>
                        <img
                          src="asserts/images/notification/girl-avatar.png"
                          alt=""
                        />
                      </div>
                      <div className={style.user__notification}>
                        <span>
                          Dennis Nedry commented on Isla Nublar SOC2 compliance
                          report{" "}
                        </span>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </div>
                    <span className={style.unread}></span>
                  </div>

                  {/* read notification  */}
                  <div className={style.tab__content__unread}>
                    <div className={style.notify}>
                      <div className={style.user__image}>
                        <img
                          src="asserts/images/notification/avatar.png"
                          alt=""
                        />
                      </div>
                      <div className={style.user__notification}>
                        <span>
                          Dennis Nedry commented on Isla Nublar SOC2 compliance
                          report{" "}
                        </span>
                        <p>Last Wednesday at 9:42 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="tab2">
                <div className={style.content__container}>
                  second tab content
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>

      {/* footer  */}
      <div className={style.footer}>
        <span className={style.setting__icon}>
          <img src="asserts/images/notification/setting.png" alt="" />
        </span>
        <span className={style.view__all__notification__btn}>
          View All Notification
        </span>
      </div>
      <img src="asserts/images/notification/Polygon.png" alt="" className={style.poly__icon}/>
    </div>
  );
};

export default ModalBody;
