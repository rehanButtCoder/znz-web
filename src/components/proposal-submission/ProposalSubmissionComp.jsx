import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import style from "./proposalsubmission.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={style.text}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const ProposalSubmissionComp = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState({});
  console.log(preview);
  if (image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div className="container">
      <div className={style.title}>
        <h2>
          Submit a <span>Proposal</span>
        </h2>
      </div>
      <div className={style.notification}>
        <div>
          <div className={style.notify__icon}>
            <img
              src="asserts/images/proposal-submission/notify-icon.png"
              alt=""
            />
          </div>
          <div className={style.notification__text}>
            <h4>You do not meet all the client's preferred qualifications</h4>
            <p>
              You may still submit a proposal, but the client will see that the
              proposal does not meet the following criteria:
            </p>
            <span className={style.earnings}>
              <span>
                Earnings: <span>At Least 1000</span>
              </span>
            </span>
          </div>
        </div>
        <div className={style.cross}>
          <img src="asserts/images/proposal-submission/cross.png" alt="" />
        </div>
      </div>
      {/* propsal setting  */}
      <div className={style.propsal__setting}>
        <h2>Proposal Setting</h2>
        <p>
          This proposal required <span>30 Thepaas</span>{" "}
        </p>
        <p>
          When you submit this proposal, You’ll have <span>106 Thepaas</span>{" "}
          remaining.
        </p>
      </div>
      <hr />

      {/* job detail  */}
      <div className={style.job__detail}>
        <h2>Job Details </h2>
        <h4>
          WP Bakery Builder Expert Needed! PSD to WP Bakery Builder along <br />{" "}
          with Responsiveness
        </h4>
        <div className={style.chips}>
          <span>App Designer</span>
          <span>App Designer</span>
          <span>App Designer</span>
          <span>App Designer</span>
        </div>
        <p className={style.para}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id es Sed
          ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur ma Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed qu
        </p>

        <ul>
          <li>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
          </li>
          <li>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
          </li>
          <li>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
          </li>
         <div className={style.more__btn}>
         <span className={style.extra}>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
            </li>
          </span>
          <input type="checkbox" id="btn" />
          <label for="btn"></label>
         </div>
        </ul>
        <span className={style.view__job__posting}>View Job Posting</span>
      </div>
      <hr />
      {/* highlights  */}
      <div className={style.highlights}>
        <div className={style.highlight}>
          <div>
            <img src="asserts/images/proposal-submission/brain.png" alt="" />
          </div>
          <div className={style.typo}>
            <h2>Experience</h2>
            <span>Intermediate Level</span>
          </div>
        </div>
        <div className={style.highlight}>
          <div>
            <img src="asserts/images/proposal-submission/tag.png" alt="" />
          </div>
          <div className={style.typo}>
            <h2>Propose your terms</h2>
            <span>Fixed Price.</span>
          </div>
        </div>
        <div className={style.highlight}>
          <div>
            <img src="asserts/images/proposal-submission/calender.png" alt="" />
          </div>
          <div className={style.typo}>
            <h2>Project Length</h2>
            <span>Project Length</span>
          </div>
        </div>
        <div className={style.highlight}>
          <div>
            <img src="asserts/images/proposal-submission/date.png" alt="" />
          </div>
          <div className={style.typo}>
            <h2>Sign Up Date </h2>
            <span>10 Jul, 2023</span>
          </div>
        </div>
      </div>
      <hr />
      {/* terms  */}
      <div className={style.terms}>
        <h2>Terms</h2>
        <h3>What do you want to be Paid?</h3>
        <div className={style.project__lenght}>
          <div className={style.milestone}>
            <Form.Check
              label="By Milestone"
              name="group1"
              type="radio"
              className={style.chxkbox__typo}
            />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id es Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className={style.milestone}>
            <Form.Check
              label="By Project"
              name="group1"
              type="radio"
              className={style.chxkbox__typo}
            />
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id es Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
        <h2 className={style.how__many__milstone__typo}>
          How many milestone do you want to include?
        </h2>
        <div className={style.milestone__payload}>
          <div className={style.milestone__data}>
            <span>Description</span>
            <div className={style.input__container}>
              <input type="text" />
            </div>
          </div>
          <div className={style.milestone__data}>
            <span>Due Date</span>
            <div
              className={`${style.input__container} ${style.pic__input__container}`}
            >
              <input type="text" />
              <img
                src="asserts/images/proposal-submission/dark-calender.png"
                alt=""
              />
            </div>
          </div>
          <div className={style.milestone__data}>
            <span>Due Date</span>
            <div
              className={`${style.input__container} ${style.pic__input__container}`}
            >
              <input type="text" />
              <span>$0.00</span>
            </div>
          </div>
        </div>
        <span className={style.add__milstone}>+ Add milestone</span>
      </div>
      <hr />

      {/* what amount you want to bid  */}
      <div className={style.bidding__amount__container}>
        <h2>
          What is the Full Amount You’d Like to <br /> Bid for This Job?
        </h2>
        <div className={style.bidding__amount}>
          <div className={style.single__amount}>
            <input type="text" placeholder="Total Bid" />
          </div>
          <div className={style.single__amount}>
            <input type="text" placeholder="Service Fee" />
          </div>
          <div className={style.single__amount}>
            <input type="text" placeholder="Your Payment" />
          </div>
        </div>
      </div>
      <hr />
      {/* how long with this project take  */}
      <div className={style.project__length}>
        <h3>How long will this project take?</h3>
        <div className={style.project__input}>
          <input type="text" placeholder="Enter here" />
        </div>
      </div>
      <hr />
      {/* bidding section  */}
      <div className={style.cover__letter}>
        <span>Add Cover Letter</span>
        <textarea
          rows="8"
          placeholder="Enter some info about your and your working experience..."
        ></textarea>
      </div>
      <div className={style.link__bio}>
        <h2>Include a link to your GitHub profile or website link </h2>
        <div className={style.link__container}>
          <input type="text" placeholder="Paste your link here" />
        </div>
      </div>

      {/* attachment  */}
      <div className={style.attach__containet}>
        <span>Attachment </span>
        <p>Drag or upload file</p>
        {/* upload code  */}
        <div>
          <input
            type="file"
            id="actual-btn"
            hidden
            accept="image/*"
            name="image"
            onChange={(e) => setImage(e.currentTarget.files[0])}
          />
          <label for="actual-btn">
            <div>
              <img src="/asserts/images/submit-proposal/upload.png" alt="" />
            </div>
          </label>
        </div>
        {/* -----------------------  */}
      </div>
      <hr />

      {/* boost your proposal  */}
      <div className={style.boost__your__proposal__container}>
        <h2>Boost your proposal (optional) </h2>
        <p>
          Bid for one of four boosted spaces at the top of the client’s proposal
          list
        </p>
        <div className={style.bidding__section}>
          <div className={style.bid__head}>
            <h3>How bidding works</h3>
            <span>Premium</span>
          </div>
          <ul>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu
            </li>
          </ul>
          <div className={style.boost__bidding}>
            <Row>
              <Col sm md={6} lg={4}>
                <div className={style.boost__bid__box}>
                  <span>Bid: 01</span>
                  <span>
                    13 Connects.{" "}
                    <span className={style.connects__updated}>2 hours ago</span>
                  </span>
                </div>
              </Col>
              <Col sm md={6} lg={4}>
                <div className={style.boost__bid__box}>
                  <span>Bid: 01</span>
                  <span>
                    13 Connects.{" "}
                    <span className={style.connects__updated}>2 hours ago</span>
                  </span>
                </div>
              </Col>
              <Col sm md={6} lg={4}>
                <div className={style.boost__bid__box}>
                  <span>Bid: 01</span>
                  <span>
                    13 Connects.{" "}
                    <span className={style.connects__updated}>2 hours ago</span>
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm md={6} lg={4}>
                {" "}
                <div className={style.boost__bid__box}>
                  <span>Your Bid</span>
                  <span>
                    17 Connects.
                    <span className={style.connects__updated}>Just Now</span>
                  </span>
                </div>
              </Col>

              <Col sm md={6} lg={4}>
                <div className={style.boost__bid__box}>
                  <span className={style.bid__five}>Bid: 05</span>
                  <span className={style.number__of__connects}>0 Connects</span>
                </div>
              </Col>
              <Col sm md={6} lg={4}>
                <div className={style.set__bid__btn}>
                  <div>
                    <span>+</span>
                    <span>Set a Bid</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSubmissionComp;
