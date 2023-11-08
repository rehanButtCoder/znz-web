import React, { useState } from "react";
import Style from "./submitPropsl.module.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from "moment";
import Dropzone from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import { uploadImage } from "../../services/uploads/imageUpload";
import { createProposal } from "../../services/proposals/ProposalsCrud";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SubmitPropsl = ({ singleJobData }) => {
  const userData = useSelector((state) => state.user.userData);
  // const userLoggedInData = useSelector((state) => state.user.userLoginData);

  console.log(userData?.user?.role?.role);
  //   dropzone used here
  const [files, setFiles] = useState([]);
  // console.log(files);
  const handleUpload = (acceptedFiles) => {
    const allowedImage = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    const checkImageTypeAndSize = acceptedFiles.every(
      (file) => allowedImage.includes(file.type) && file.size <= 10485760
    );
    if (checkImageTypeAndSize) {
      const uploadedFiles = acceptedFiles.map((file) => {
        return {
          file: file,
          preview: URL.createObjectURL(file),
        };
      });
      setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    } else {
      toast.error('Must be Images of type png,jpg,jpeg,gif. Each with max size of 10MB!', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  // formik
  const initialValues = {
    description: "",
    payment: "",
    charges: "",
    // bids: null,
    duration: "",
    github: "",
    website: "",
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    charges: Yup.string().required("This field is required"),
    payment: Yup.string().required("This field is required"),
    // bids: Yup.number().required("Please enter a bid minimum 0"),
    duration: Yup.string().required("This field is required"),
    github: Yup.string(),
    website: Yup.string(),
  });
  let navigate = useNavigate();

  const handleSubmit = async (values) => {
    // Handle form submission here, e.g., send data to the server
    const data = {
      coverLetter: values.description,
      duration: values.duration,
      payment: values.payment,
      serviceCharges: values.charges,
      githubLink: values.github,
      websiteLink: values.website,
    }

    if (files.length > 0) {
      data.imagesUrl = await Promise.all(files.map(async (fileObj) => {
        const { file } = fileObj;
        const formDataImg = new FormData();
        formDataImg.append('file', file);

        const imageResponse = await uploadImage(formDataImg);
        return imageResponse.data.url;
      }));
    }
    console.log(data)
    // debugger
    const resp = await createProposal(data, userData?.token, userData?.user?.id, singleJobData?._id)
    if (resp.status === 201) {
      toast.success(resp.data.message || "Proposal Submitted");
      // setBtnLoader(false);
      setTimeout(() => {
        if (userData?.user?.role?.role === "seller") {
          navigate("/seller-profile");
        } else {
          navigate("/clientprofilepage");
        }
      }, 2000);
    } else {
      toast.error(resp.data.message || "Server Error");
      // setBtnLoader(false);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="container">
            <div className={Style.image__container}>
              <div className={Style.back__image}>
                <img
                  src="/asserts/images/job-detail/proposalBg.png"
                  alt=""
                />
              </div>
            </div>

            <div className={Style.detail__container}>
              <div className={Style.job__detail}>
                {/* your status section  */}
                <div className={Style.status__sctn}>
                  <div className={Style.status__title}>
                    <h2>Proposal Information</h2>
                  </div>
                  <div className={Style.status__contents}>
                    <div>
                      <span className={Style.status__contnt_title}>
                        This proposal requires{" "}
                        <span className={Style.status__contnt_value}>
                          10 theepa's
                        </span>
                        . When you submit this proposal.
                      </span>
                    </div>
                  </div>
                  <hr className="hr__style" />
                </div>
                {/* status__section end  */}

                {/* job description  */}
                <div className={Style.job__description}>
                  <div className={Style.desc__title}>
                    <h2>Job Details</h2>
                  </div>
                  <div className={Style.desc__container}>
                    <h2>{singleJobData?.service_Title}</h2>
                    <div className={Style.service__box}>
                      {singleJobData?.category?.map(categoryObj => (
                        <span style={{ opacity: "unset" }} className={Style.service__title}>
                          {categoryObj?.category}
                        </span>
                      ))}
                    </div>
                    <br />
                    <span className={Style.posted__date}>
                      Posted on : {moment(singleJobData?.createdAt).format("DD MMM YYYY")}
                    </span>
                  </div>
                </div>
                {/* job description end  */}
                {/* resposibilities section  */}
                <div className={Style.responsibilites__container}>
                  <div className={Style.resp__paras}>
                    <span>
                      {singleJobData?.service_Description}
                    </span>
                  </div>
                </div>

                {/* responsibilites section end  */}
                {/* requirement section  */}
                <div className={Style.requiremnt__container}>
                  <div className={Style.list__items}>
                    <ul>
                      {singleJobData?.requirements?.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  <h2 className={Style.require__scnd__title}>
                    What is the full amount you’d like to bid for this job?
                  </h2>
                  <span className={Style.bidding__title}>
                    Pricing of Project
                  </span>
                  <div className={Style.bidding__box}>
                    <div className={Style.bidding}>
                      {/* <span>No. of bids</span> */}
                      {/* <div className={Style.bid__input__box}> */}
                      {/* <input type="number" placeholder="Type in your bid no." /> */}
                      {/* <Field
                          id="bids"
                          name="bids"
                          type="number"
                          placeholder="Type in your bid no."
                        />
                        <ErrorMessage
                          name="bids"
                          component="div"
                          style={{ color: "red" }}
                        /> */}
                      {/* </div> */}
                    </div>
                    <div className={Style.bidding}>
                      <span>Your payment</span>
                      <div className={Style.bid__input__box}>
                        <div className={Style.payment__box}>
                          <Field
                            id="github"
                            name="payment"
                            type="number"
                            placeholder="Enter GitHub username"
                          />
                        </div>
                        <ErrorMessage
                          name="payment"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </div>
                    </div>
                    <div className={Style.bidding}>
                      <span>Service charges</span>
                      <div className={Style.bid__input__box}>
                        <div className={Style.bid__input__box}>
                          <div className={Style.payment__box}>
                            <Field
                              id="github"
                              type="number"
                              name="charges"
                              placeholder="Enter GitHub username"
                            />
                          </div>
                          <ErrorMessage
                            name="charges"
                            component="div"
                            style={{ color: "red" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="hr__style" />
                  {/* how long will it take  */}
                  <div className={Style.how__long__will__take}>
                    <span>How long will this project take?</span>
                    <div className={Style.calender__box}>
                      <Field type="number" name="duration" onInput={(e) => {
                        e.target.value = Math.max(
                          0,
                          parseInt(e.target.value)
                        )
                          .toString()
                          .slice(0, 3); // Maximum length of 5 characters
                      }} /> <span> Days</span>
                    </div>
                    <ErrorMessage
                      name="duration"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </div>
                  <hr className="hr__style" />

                  <div className={Style.link__sectn}>
                    <div className={Style.cover__letter}>
                      <span>Add Cover Letter</span>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        placeholder="Enter some info about your and your working experience..."
                        rows="8"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div>

                    <span className={Style.social__links}>
                      Include a link to your GitHub profile or website link
                    </span>
                    <div className={Style.git__container}>
                      <div>
                        <div className={Style.git}>
                          <img
                            src="/asserts/images/submit-proposal/git.png"
                            alt=""
                          />
                          <span>Github</span>
                        </div>
                        <div className={Style.git__inp}>
                          {/* <input type="text" placeholder="Enter Username" /> */}
                          <Field
                            id="github"
                            name="github"
                            placeholder="Enter GitHub username"
                          />
                          {/* <ErrorMessage
                            name="github"
                            component="div"
                            style={{ color: "red" }}
                          /> */}
                        </div>
                      </div>
                      <div>
                        <div className={Style.git}>
                          <img
                            src="/asserts/images/submit-proposal/website.png"
                            alt=""
                          />
                          <span>Website</span>
                        </div>
                        <div className={Style.git__inp}>
                          {/* <input type="text" placeholder="Enter Website" /> */}
                          <Field
                            id="website"
                            name="website"
                            placeholder="Enter Website"
                          />
                          {/* <ErrorMessage
                            name="website"
                            component="div"
                            style={{ color: "red" }}
                          /> */}
                        </div>
                      </div>
                    </div>
                    <hr className="hr__style" />
                    <div>
                      <h3>Upload Other Images</h3>
                      <br />
                      <Dropzone onDrop={handleUpload} acceptedFiles={['image/*']}>
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p style={{ border: '1px dotted rgba(145, 158, 171, 0.32)', padding: '24px 8px' }}>
                              Drag and drop images here, or click to select files
                            </p>
                          </div>
                        )}
                      </Dropzone>
                      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }} className="marginTB14">
                        {files.map((file, index) => (
                          <div key={index}>
                            <img src={file.preview} className="sizeSet" alt="preview" />
                            {/* <p>{file.preview}</p> */}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/*  */}
                    {/* <div className={Style.attach__containet}>
                      <span>Attachment </span>
                      <p>Drag or upload file</p>
                      {/* upload code  */}
                    {/* <div>
                      <Field
                        type="file"
                        id="actual-btn"
                        name="picture"
                        hidden
                      />
                      <label for="actual-btn">
                        <div>
                          <img
                            src="/asserts/images/submit-proposal/upload.png"
                            alt=""
                          />
                        </div>
                      </label>
                      <ErrorMessage
                        name="picture"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </div> */}
                    {/* -----------------------  */}
                    {/* </div> */}

                    {/* boost your proposal  */}
                    <div className={Style.boost__container}>
                      {/* <h2>Boost your proposal (optional) </h2>
                      <p>
                        Bid for one of four boosted spaces at the top of the
                        client’s proposal list
                      </p>
                      <div className={Style.premium}>
                        <span>How bidding works</span>
                        <span>Premium</span>
                      </div>
                      <ul className={Style.list}>
                        <li>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu{" "}
                        </li>
                        <li>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu{" "}
                        </li>
                      </ul> */}

                      {/* <div className={Style.boost__bidding}>
                        <Row>
                          <Col sm>
                            <div className={Style.boost__bid__box}>
                              <span>Bid: 01</span>
                              <span>
                                13 Connects.{" "}
                                <span className={Style.connects__updated}>
                                  2 hours ago
                                </span>
                              </span>
                            </div>
                          </Col>
                          <Col sm>
                            <div className={Style.boost__bid__box}>
                              <span className={Style.bid__five}>Bid: 05</span>
                              <span className={Style.number__of__connects}>
                                0 Connects
                              </span>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm>
                            {" "}
                            <div className={Style.boost__bid__box}>
                              <span>Your Bid</span>
                              <span>
                                17 Connects.
                                <span className={Style.connects__updated}>
                                  Just Now
                                </span>
                              </span>
                            </div>
                          </Col>
                          <Col sm>
                            <div className={Style.set__bid__btn}>
                              <div>
                                <span>+</span>
                                <span>Set a Bid</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <hr className="hr__style" />
                      </div> */}
                      {/* last section  */}
                      <div className={Style.last__section__btns}>
                        <button className={Style.send__btn} type="submit">
                          Send Proposal
                        </button>
                        <button className={Style.cancel}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default SubmitPropsl;
