import React, { useState } from "react";
import Style from "./feedback.module.css";
import ReactStars from "react-stars";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FeedBack = () => {
  const ratingChanged = (newRating) => {
    //rating value function
  };

  const validationSchema = Yup.object().shape({
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters"),
    rating: Yup.number().required("Please provide a rating"),
    scndRating: Yup.number().required("Please provide a rating "),
    thrdRating: Yup.number().required("Please provide a rating "),
  });

  const initialValues = {
    message: "",
    rating: 0,
    scndRating: 0,
    thrdRating: 0,
  };

  const handleSubmit = (values) => {
    // Handle form submission here, e.g., send data to the server
    console.log(values);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className={Style.comment__box__main__contnr}>
            <div className={Style.feedback__page}>
              <div className={Style.feedback__title}>
                <h2>
                  Give <span>Feedback</span>
                </h2>
                <p>
                  Share youe experience with the community to help them make
                  better desicions.
                </p>
                <hr className={Style.hr__style} />
              </div>
              {/* rating section  */}
              <div className={Style.rating}>
                <div className={Style.rating__title}>
                  <h2>Rating</h2>
                  <p>Please rate the student’s performance</p>
                </div>
                <div className={Style.rating__star__contnr}>
                  <div className={Style.service__rating}>
                    <div>
                      <ul className={Style.list__items}>
                        <li>
                          Service as described
                          <p>Did the result match the profile description ?</p>
                        </li>
                      </ul>
                    </div>

                    <div className={Style.star__style}>
                      <Field name="rating">
                        {({ field, form }) => (
                          <ReactStars
                            value={field.value}
                            count={5}
                            size={24}
                            color2={"#ffd700"}
                            half={false}
                            onChange={(newRating) =>
                              form.setFieldValue(field.name, newRating)
                            }
                          />
                        )}
                      </Field>
                    </div>
                    <ErrorMessage
                      name="rating"
                      component="span"
                      style={{ color: "red" }}
                    />
                  </div>
                  <div className={Style.service__rating}>
                    <div>
                      <ul className={Style.list__items}>
                        <li>
                          Service as described
                          <p>Did the result match the profile description ?</p>
                        </li>
                      </ul>
                    </div>
                    <div className={Style.star__style}>
                      <Field name="scndRating">
                        {({ field, form }) => (
                          <ReactStars
                            value={field.value}
                            count={5}
                            size={24}
                            color2={"#ffd700"}
                            half={false}
                            onChange={(newRating) =>
                              form.setFieldValue(field.name, newRating)
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="scndRating"
                        component="span"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <div className={Style.service__rating}>
                    <div>
                      <ul className={Style.list__items}>
                        <li>
                          Service as described
                          <p>Did the result match the profile description ?</p>
                        </li>
                      </ul>
                    </div>
                    <div className={Style.star__style}>
                      <Field name="thrdRating">
                        {({ field, form }) => (
                          <ReactStars
                            value={field.value}
                            count={5}
                            size={24}
                            color2={"#ffd700"}
                            half={false}
                            onChange={(newRating) =>
                              form.setFieldValue(field.name, newRating)
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="thrdRating"
                        component="span"
                        style={{ color: "red" }}
                      />
                    </div>
                  </div>
                  <hr className={Style.hr__style} />
                </div>
              </div>

              {/* comment section  */}
              <div className={Style.comnt__sectn}>
                <div className={Style.comnt__titles}>
                  <h2>Comment</h2>
                  <p>Share your experience with student</p>
                </div>
                <div className={Style.text__box}>
                  <Field
                    as="textarea"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Describe the student’s performance..."
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    style={{ color: "red" }}
                  />
                </div>
                <div className={Style.submit__sectn}>
                  <button>cancel</button>
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default FeedBack;
