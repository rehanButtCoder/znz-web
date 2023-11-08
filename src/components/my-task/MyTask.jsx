import React from "react";
import TaskCard from "./task-card/TaskCard";
import style from "./mytask.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSingleJob } from "../../services/jobs/jobCrud";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

const MyTask = () => {
  const [queryParameters] = useSearchParams();
  // queryParameters.get("id")
  // console.log(queryParameters.get("id"));

  // const userLoggedInData = useSelector((state) => state.user.userLoginData);

  const userData = useSelector((state) => state.user.userData);
  // const jobData = useSelector((state) => state.job.allJobsState);
  // console.log( jobData);
  // console.log(userData)
  const [data, setData] = useState();
  // const [proposalData, setProposalData] = useState();
  // console.log('country',data);
  // console.log(data);
  const getFunc = async () => {
    const response = await getSingleJob(
      queryParameters.get("id"),
      userData?.token
    );
    if (response?.status === 200) {
      setData(response?.data?.job);
    }
  };

  useEffect(() => {
    getFunc();
  }, []);
  // const numberOfColumns = 3;
  return (
    <React.Fragment>
      <div className={style.main__container}>
        <div>
          <div className={`container ${style.inner__container}`}>
            <h2>
              My <span>Task</span>
            </h2>
            <div className={style.card__container}>
            <Row className="justify-content-start align-items-start">
                <Col  xs={12} sm={6} md={4} lg={3}>
                  <div className={style.card__styling}><TaskCard /></div>
                </Col>
                <Col   xs={12} sm={6} md={4} lg={3}>
                <div className={style.card__styling}><TaskCard /></div>
                </Col>
                <Col  xs={12} sm={6} md={4} lg={3}>
                <div className={style.card__styling}><TaskCard /></div>
                </Col>
                <Col   xs={12} sm={6} md={4} lg={3}>
                <div className={style.card__styling}><TaskCard /></div>
                </Col>
                <Col  xs={12} sm={6} md={4} lg={3}>
                <div className={style.card__styling}><TaskCard /></div>
                </Col>
              </Row> 
              
            </div>
            <div className={style.detail__container}>
              <Row>
                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img
                        src="asserts/images/my-task-page/Refresh.png"
                        alt=""
                      />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Title</span>
                      <span className={style.subtitle}>
                        {data?.service_Title}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img src="asserts/images/my-task-page/loc.png" alt="" />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Duration</span>
                      <span className={style.subtitle}>
                        {data?.min_projectLength} to {data?.max_projectLength}{" "}
                        Days
                      </span>
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img src="asserts/images/my-task-page/Cal.png" alt="" />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Budget</span>
                      <span className={style.subtitle}>
                        {data?.minimum_budget}
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img src="asserts/images/my-task-page/Paste.png" alt="" />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Country</span>
                      <span className={style.subtitle}>{data?.country}</span>
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img src="asserts/images/my-task-page/clock.png" alt="" />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Created At</span>
                      <span className={style.subtitle}>
                        {moment(data?.createdAt).format("DD MMM YYYY")}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img src="asserts/images/my-task-page/clock.png" alt="" />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Proposals</span>
                      <span className={style.subtitle}>{data?.proposal}</span>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* <Row>
                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img
                        src="asserts/images/my-task-page/Paste.png"
                        alt=""
                      />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Job Type</span>
                      <span className={style.subtitle}>Part Time</span>
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={4}>
                  <div className={style.single__detail}>
                    <span className={style.icon__style}>
                      <img
                        src="asserts/images/my-task-page/Paste.png"
                        alt=""
                      />
                    </span>
                    <div className={style.detail__content}>
                      <span className={style.detail__title}>Job Type</span>
                      <span className={style.subtitle}>Part Time</span>
                    </div>
                  </div>
                </Col>
              </Row> */}
              {/* <button className={style.go__back__btn}>Go Back</button> */}
            </div>
            <div className={style.task__description}>
              <h4>Task Description</h4>
              <p>{data?.service_Description}</p>
            </div>
            {/* <div className={style.buttons}>
              <button className={style.invite__btn}>Invite</button>
              <button className={style.cancel__btn}>cancel Task</button>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyTask;
