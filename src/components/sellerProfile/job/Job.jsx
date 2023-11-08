import React from "react";
import Style from "./job.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import moment from 'moment'; // Import Moment.js
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToFavJob, deleteFavJob } from "../../../services/favourite/favouriteCrud";
import FavJobs from "./FavJobs";
import { addAllJobs } from "../../../features/job/jobSlice";
import { getAllJobs } from "../../../services/jobs/jobCrud";
import { ToastContainer, toast } from "react-toastify";

const Job = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const jobData = useSelector((state) => state.job.allJobsState);
  const userLoggedInData = useSelector((state) => state.user.userLoginData);
  const userTokenData = useSelector((state) => state.user.userData);
  console.log(jobData);
  // console.log(userLoggedInData);
  const [key, setKey] = useState("bestjobs");

  // add to fav
  const addtoFav = async (jobId) => {
    debugger
    const data = {
      userId: userLoggedInData?._id,
      jobId: jobId
    }

    const resp = await addToFavJob(data, userTokenData?.token)
    if (resp.status === 201) {
      const response = await getAllJobs(userTokenData?.token);
      if (response?.status === 200) {
        dispatch(addAllJobs(response?.data?.AllJobs));
      }
    } else {
      toast.error(resp.data.error || "Server Error");
    }
  }
  const removeFromFav = async (jobId) => {
    debugger
    const data = {
      userId: userLoggedInData?._id,
      jobId: jobId
    }

    const resp = await deleteFavJob(data, userTokenData?.token)
    if (resp.status === 201) {
      dispatch(addAllJobs(resp?.data?.AllJobs));
    } else {
      console.log("perfect");

    }
  }
  // redirecting
  const redirect = (jobId) => {
    console.log(jobId);
    setTimeout(() => {
      navigate(`/jobdetail?id=${jobId}`)
    }, 0);
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <div className={Style.jobs__contnr}>
        <div className={Style.second__section}>
          <div className={Style.user__title}>
            <h2>
              {userLoggedInData?.first_name} Jobs <span>You</span> Might Like
            </h2>
          </div>
        </div>
        <div className={Style.gigs__sectn}>
          <div className={Style.gigs__contnr}>
            <div className={Style.search__box}>
              <input
                type="text"
                placeholder="Search Your Keyword Here..."
                className={Style.search__inpt}
              />
              <button className={Style.search__btn}>Search</button>
            </div>
            {/* best jobs section  */}

            <div className={Style.tabs}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab
                  eventKey="bestjobs"
                  title="Best Jobs"
                  tabClassName={Style.tab__style}
                >
                  <p className={Style.preference__para}>
                    Browse jobs that match your experience to a client’s hiring
                    preference. Order by most relevant.
                  </p>
                  <br />
                  <div className={Style.job__contnr}>
                    {jobData?.map((data, index) => {
                      return (
                        <Link to="" className={Style.job} key={index}>
                          {/* <Link to={`/jobdetail?id=${data?._id}`} className={Style.job} key={index}> */}
                          <Row>
                            <Col sm={12} lg={10} onClick={() => { redirect(data?._id) }}>
                              <div className={Style.job__contnr}>
                                <div className={Style.title__main__contnr}>
                                  <div className={Style.title__sectn}>
                                    <div className={Style.title__contnr}>
                                      <h2>{data?.service_Title}</h2>
                                    </div>
                                    <div className={Style.job__descptn}>
                                      <p>{data?.service_Description}</p>
                                    </div>
                                  </div>

                                  <div className={Style.props__locatn}>
                                    <div className={Style.propsal}>
                                      <p>Proposals: </p>
                                      <span>{data?.proposal}</span>
                                    </div>
                                    <div className={Style.locatn}>
                                      <p>Location:</p>
                                      <span>{data?.country}</span>
                                    </div>
                                    <div className={Style.fix__price__contnr}>
                                      <h3>
                                        Job Posted :  <span style={{ color: "black" }}>{moment(data?.createdAt).calendar()}</span>
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={12} lg={2}>
                              <div className={Style.whislist__contnr}>
                                {data?.isFavorite === true ?
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="asserts/images/seller-page/goldenHeart.png"
                                    alt=""
                                    onClick={() => { removeFromFav(data?._id) }}
                                  />
                                  :
                                  <img
                                    style={{ cursor: "pointer" }}
                                    src="asserts/images/seller-page/whislist.png"
                                    alt=""
                                    onClick={() => { addtoFav(data?._id) }}
                                  />

                                }
                              </div>
                            </Col>
                          </Row>
                          <hr className={Style.hr} />
                        </Link>
                      );
                    })}
                  </div>
                </Tab>


                <Tab
                  eventKey="savedjobs"
                  title="Saved Jobs"
                  tabClassName={Style.tab__style}
                >
                  <p className={Style.preference__para}>
                    Browse jobs that match your experience to a client’s hiring
                    preference. Order by most relevant.
                  </p>
                  <br />
                  <div className={Style.job__contnr}>
                    {jobData?.map((data, index) => {
                      return (
                        <Link key={index} to="" className={Style.job}>
                          {/* <Link to={`/jobdetail?id=${data?._id}`} className={Style.job} key={index}> */}
                          <FavJobs data={data} />
                        </Link>
                      );
                    })}
                  </div>
                </Tab>
              </Tabs>


            </div>
          </div>
          <div className={Style.pagination}>
            <Pagination.Prev />
            <Pagination.Item active href="" className={Style.page_item}>
              {1}
            </Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job;
