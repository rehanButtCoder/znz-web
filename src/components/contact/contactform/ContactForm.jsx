import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = (props) => {
  const initialValues = {
    name: "",
    lname: "",
    email: "",
    subject: "",
    description: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    description: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(values);
    axios
      .post("http://localhost:3000/api/contactUserInfo", values)
      .then((response) => {
        console.log(response.data);
        toast.success("Form submitted successfully will reply it soon ");
        resetForm();
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again.");
        setSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="container mtTop60">
        <div className="row align-content-center  mb-4">
          <div className="col-md-12 text-center width-100 contacthead">
            <h2 className="contact-h2-1">
              {props.head ? props.head : "Contact "}{" "}
              <span className="active">
                {props.spann ? props.spann : "Us"}{" "}
              </span>
            </h2>
            {props.description && <p>{props.description}</p>}
            {props.descritop2 && <p>{props.descritop2}</p>}
          </div>{" "}
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="contct-us-f">
           
              <div className="row  CUSTM-FRM-CLS ">
                <div className="col-md-6 mb-3">
                  {/* <div className="d-flex flex-column align-items-start width-100"> */}
                  <label className="mb-1 p-contact-mb cntct-form-label">First Name</label>
                  <Field
                    placeholder="Jonathan"
                    className="nameField mb-namefield custom-input"
                    type="text"
                    name="name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col-md-6">
                  {/* <div className="d-flex flex-column align-items-start width-100"> */}
                  <label className="mb-1 p-contact-mb cntct-form-label">Last Name</label>
                  <Field
                    placeholder="Jonathan"
                    className="nameField mb-namefield custom-input"
                    type="text"
                    name="lname"
                  />
                  <ErrorMessage
                    name="lname"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  {/* <div className="d-flex flex-column align-items-start width-100"> */}
                  <label className="mb-1 p-contact-mb cntct-form-label">Email</label>
                  <Field
                    placeholder="example@example.com"
                    className="nameField mb-namefield custom-input"
                    type="text"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
         
                </div>
                <div className="col-md-6">
                  
                  <label className="mb-1 p-contact-mb cntct-form-label" >Job</label>
                  <Field
                    placeholder="Subject"
                    className="nameField mb-namefield custom-input"
                    type="text"
                    name="subject"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col-md-12">
                  {/* <div className="d-flex flex-column align-items-start"> */}
                  <label className="mb-1 p-contact-mb cntct-form-label">Message</label>
                  <Field
                    placeholder="Type your message..."
                    className="messageField mb-messagefield custom-input"
                    as="textarea"
                    name="description"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error-message"
                  />
                  {/* */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button fixingBtn mt-5"
                  >
                    Submit
                  </button>
                </div>
              </div>
            
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
