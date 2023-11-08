import React, { useState } from "react";
import style from "./orderDetail.module.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const OrderDetail = () => {
  // getting image
  const [image, setImage] = useState();

  const [preview, setPreview] = useState({});
  // console.log(preview);
  if (image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  // console.log("image",preview)

  // formik
  const initialValues = {
    picture: null,
  };

  const validationSchema = Yup.object().shape({
    picture: Yup.mixed().required("Please select an image"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  // rating code
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div className={style.main__container}>
        <div className={`container ${style.inner__container}`}>
          <div className={style.order__detail__container}>
            <h2>Your Order Details</h2>
            <hr />
            <div className={style.order__list__container}>
              <div className={style.inner__list__container}>
                <div className={style.listing__items}>
                  <div className={style.single__list}>
                    <div className={style.icon__contaienr}>
                      <span></span>
                      <img
                        src="asserts/images/proposal-page/pencil.png"
                        alt=""
                      />
                    </div>
                    <h4>
                      braddouglous{" "}
                      <span className={style.inner__span}>
                        place this order
                      </span>{" "}
                      <span className={style.order__time}>
                        August 02, 08:45PM
                      </span>
                    </h4>
                  </div>
                  <div className={style.single__list}>
                    <div className={style.icon__contaienr}>
                      <span></span>
                      <img
                        src="asserts/images/proposal-page/notepad.png"
                        alt=""
                      />
                    </div>
                    <h4>
                      braddouglous{" "}
                      <span className={style.inner__span}>
                        send the requirements
                      </span>{" "}
                      <span className={style.order__time}>
                        August 02, 08:45PM
                      </span>
                    </h4>
                  </div>
                  <div className={style.single__list}>
                    <div className={style.icon__contaienr}>
                      <span></span>
                      <img
                        src="asserts/images/proposal-page/start.png"
                        alt=""
                      />
                    </div>
                    <h4>
                      Your order started
                      <span className={style.order__time}>
                        {" "}
                        August 02, 08:45PM
                      </span>
                    </h4>
                  </div>
                  <div className={style.single__list}>
                    <div className={style.icon__contaienr}>
                      <span></span>
                      <img src="asserts/images/proposal-page/bell.png" alt="" />
                    </div>
                    <h4>
                      Your delivery date was updated to August 12
                      <span className={style.order__time}>
                        {" "}
                        August 02, 08:45PM
                      </span>
                    </h4>
                  </div>
                  <div className={style.single__list}>
                    <div className={style.icon__contaienr}>
                      <span></span>
                      <img
                        src="asserts/images/proposal-page/calender.png"
                        alt=""
                      />
                    </div>
                    <h4>
                      You delivered the order
                      <span className={style.order__time}>
                        {" "}
                        August 02, 08:45PM
                      </span>
                    </h4>
                  </div>
                </div>
                <div className={style.attachment__container}>
                  <div className={style.delivery__no}>
                    <h4>Delivery #1</h4>
                  </div>
                  <div className={style.attachment__file}>
                    <div className={style.project__title}>
                      <span>Me</span>
                      <p>This is project file</p>
                    </div>
                    <Form>
                      <div>
                        <Field
                          type="file"
                          id="actual-btn"
                          name="picture"
                          hidden
                        />
                        <label for="actual-btn">
                          <div className={style.attach__file}>
                            <img
                              src="/asserts/images/proposal-page/attachment.png"
                              alt=""
                              
                            />
                          </div>
                        </label>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className={style.single__list}>
                  <div className={style.icon__contaienr}>
                    <span></span>
                    <img src="asserts/images/proposal-page/tick.png" alt="" />
                  </div>
                  <h4>
                    The order was completed
                    <span className={style.order__time}>
                      {" "}
                      August 02, 08:45PM
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className={style.review__container}>
              <div className={style.reviwer}>
                <img
                  src="asserts/images/view-all-students/student.jpg"
                  alt=""
                />
                <div className={style.reviewr__name}>
                  <h4>
                    Braddouglous <span>30 mintues ago</span>
                  </h4>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    half="false"
                  />
                </div>
              </div>
              <div className={style.review__text}>
                <p>
                  I really like the way you do design and your design sense is
                  goodenough. I really appreciate your effort. I must be
                  recommend you others
                </p>
              </div>
             
            </div>
            <hr />
            <div className={style.order__status__container}>
              <img src="asserts/images/view-all-students/student.jpg" alt="" />
              <h4>
                Your order is completed. if you need to contact the buyer.{" "}
                <Link to={"#"} className={style.goto__link}>
                  {" "}
                  Go to Inbox
                </Link>
              </h4>
            </div>
          </div>
          {/* less detail box  */}
          <div className={style.less__detail__container}>
            <h3>Order Details</h3>
            <div className={style.image__box}>
              <img src="asserts/images/view-all-students/student.jpg" alt="" />
              <div className={style.desc}>
                <h3>I will create a modern web design.....</h3>
                <span>Completed</span>
              </div>
            </div>
            <hr />
            <div className={style.details}>
              <div className={style.order__detail}>
                <span className={style.title}>Ordered By:</span>
                <span className={style.order__value}>Braddouglous88</span>
              </div>
              <div className={style.order__detail}>
                <span className={style.title}>Delivery Date: :</span>
                <span className={style.order__value}>Aug 17. 03:50AM</span>
              </div>
              <div className={style.order__detail}>
                <span className={style.title}>Total Price:</span>
                <span className={style.order__value}>$350</span>
              </div>
              <div className={style.order__detail}>
                <span className={style.title}>Order Number:</span>
                <span className={style.order__value}>FjkKTibaH1526</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Formik>
  );
};
