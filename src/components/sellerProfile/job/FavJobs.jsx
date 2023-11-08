import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./job.module.css";
import { useSelector } from 'react-redux';
import { deleteFavJob } from '../../../services/favourite/favouriteCrud';
import moment from 'moment';

const FavJobs = ({ data }) => {
    let navigate = useNavigate();

    const jobData = useSelector((state) => state.job.allJobsState);
    const userLoggedInData = useSelector((state) => state.user.userLoginData);
    const userTokenData = useSelector((state) => state.user.userData);
    // console.log(userTokenData);
    // console.log(userLoggedInData);

    // add to fav
    const removeFromFav = async (jobId) => {
        const data = {
            userId: userLoggedInData?._id,
            jobId: jobId
        }

        const resp = await deleteFavJob(data, userTokenData?.token)
        if (resp.status === 201) {
            console.log("perfect");
        }
    }
    const redirect = (jobId) => {
        console.log(jobId);
        setTimeout(() => {
            navigate(`/jobdetail?id=${jobId}`)
        }, 0);
    }

    return (
        <div>
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
                        <img
                            src="asserts/images/seller-page/whislist.png"
                            alt=""
                            onClick={() => { removeFromFav(data?._id) }}
                        />
                    </div>
                </Col>
            </Row>
            <hr className={Style.hr} />
        </div>
    )
}

export default FavJobs