import React, { useEffect, useState } from "react";
import Style from "./Signup.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Field, Form, Formik, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import { userSignup } from "../../services/user/signup";
import { ToastContainer, toast } from "react-toastify";
import { uploadImage } from "../../services/uploads/imageUpload";
import { countryData } from "../../services/seeders/Country";

const SignupPage = () => {
  const [btnloader, setBtnLoader] = useState(false);

  const [country, setCountry] = useState();
  const getFunc = async () => {
    const response = await countryData();

    if (response.status === 200) {
      setCountry(response.data.countryData);
    }
  };
  useEffect(() => {
    getFunc();
  }, []);

  let navigate = useNavigate();
  // for image
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState();
  const imagesPreview = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
    }
  };

  // role
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerBE, setIsSellerBE] = useState("64aee9587e73d38366c4905b");
  // console.log(isSeller);
  // 64aee9587e73d38366c4905b is for buyer
  const selectRole = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "64aee9587e73d38366c4905b") {
      setIsSeller(false);
      setIsSellerBE(selectedValue);
    } else {
      setIsSeller(true);
      setIsSellerBE(selectedValue);
    }
  };

  // country
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectCountry = (event, setFieldValue) => {
    const { value } = event.target;
    setSelectedOption(value);
    setFieldValue("country", value);
  };

  // initial values
  const initialValues = {
    fName: "",
    lName: "",
    email: "",
    pass: "",
    dob: "",
    language: "",
    phNumber: "",
    country: "",
    address: "",
    about: "",
    ...(isSeller
      ? {
          service: "",
          rate: "",
        }
      : {}),
  };

  // validation
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    pass: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
        "Must Contain 8 Characters, One Uppercase, Lowercase, One Number and one special case Character"
      ),
    dob: Yup.date()
      .max(new Date(), "Date of Birth cannot be in the future")
      .required("Date of Birth is required"),
    language: Yup.string().required("Langauge required"),
    phNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    about: Yup.string().required("Message is required"),
    ...(isSeller
      ? {
          service: "",
          rate: "",
        }
      : {}),
  });
  // console.log(isSellerBE);
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (picture !== null) {
      setBtnLoader(true);
      const data = {
        image: "",
        role: isSellerBE,
        first_name: values.fName,
        last_name: values.lName,
        email: values.email,
        password: values.pass,
        // service_Title: values.service,
        // hourly_rate: values.rate,
        country: selectedOption,
        phone_no: values.phNumber,
        service_Description: values.about,
        date_of_birth: values.dob,
        address: values.address,
        language: values.language,
      };

      if (isSellerBE === "6478b7810707f58c685954fb") {
        data["service_Title"] = values.service;
        data["hourly_rate"] = values.rate;
      }
      const formDataImg = new FormData();
      formDataImg.append("file", picture);
      const imageResponse = await uploadImage(formDataImg);
      data.image = imageResponse.data.url;

      const resp = await userSignup(data);
      // console.log(data);
      if (resp.status === 201) {
        // const resp1 = userEmailVerification(resp.data.data._id)
        toast.success(resp.data.message || "Email Sent");
        setTimeout(() => {
          navigate(`/resend-email?email=${values.email}`);
        }, 3200);
      } else {
        toast.error(resp.data.message || "Unkown Error");
        setBtnLoader(false);
      }
    } else {
      toast.error("Please Upload an Image");
    }
  };

  return (
    <div className={Style.signup__page}>
      <ToastContainer />
      <Container className={Style.main__containr}>
        <Row>
          <Col>
            <div className={Style.form__sectn}>
              <div className={Style.form__title}>
                <h2>Join Now</h2>
              </div>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <div className={Style.outer_frm}>
                    <Form className={Style.form__style}>
                      {imgData && (
                        <img className={Style.imageSize} src={imgData} alt="" />
                      )}
                      <div className={Style.upload_container}>
                        <input
                          type="file"
                          id="actual-btn"
                          hidden
                          accept="image/*"
                          // name="image"
                          onChange={(e) => imagesPreview(e)}
                        />

                        <label
                          for="actual-btn"
                          className={Style.pic__upload__btn}
                        >
                          <span>Upload Photo</span>
                        </label>
                      </div>
                      <div className={Style.frm_contnr}>
                        <select
                          onChange={selectRole}
                          className={`${Style.role__style}`}
                          // name="role"
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          {/* <option selected disabled>
                            Select Role
                          </option> */}
                          <option selected value="64aee9587e73d38366c4905b">
                            Buyer
                          </option>
                          <option value="64aee9587e73d38366c4905a">
                            Seller
                          </option>
                        </select>
                      </div>
                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/user.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="fName"
                          type="text"
                          placeholder="First Name"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="fName"
                        className={Style.erorMsg}
                        component="div"
                      />

                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/user.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="lName"
                          type="text"
                          placeholder="Last Name"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="lName"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/mail.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/lock.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="pass"
                          type="password"
                          placeholder="Password"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="pass"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/lock.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="dob"
                          type="date"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="dob"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.frm_contnr}>
                        <span>
                          <img
                            src="asserts/images/form-icons/lock.png"
                            alt=""
                            width={20}
                            height={20}
                          />
                        </span>
                        <Field
                          name="language"
                          type="text"
                          placeholder="Language"
                          className={Style.form__inpt}
                        />
                      </div>
                      <ErrorMessage
                        name="language"
                        className={Style.erorMsg}
                        component="div"
                      />

                      {isSeller && (
                        <>
                          <div className={Style.frm_contnr}>
                            <span>
                              {" "}
                              <img
                                src="asserts/images/form-icons/lock.png"
                                alt=""
                                width={20}
                                height={20}
                              />
                            </span>
                            <Field
                              name="service"
                              type="text"
                              placeholder="Service Title"
                              className={Style.service__title}
                            />
                          </div>
                          <ErrorMessage
                            name="service"
                            className={Style.erorMsg}
                            component="div"
                          />

                          <div className={Style.frm_contnr}>
                            <span className={Style.dollar}>$</span>
                            <Field
                              name="rate"
                              type="number"
                              placeholder="Hourly rate"
                              className={Style.form__inpt}
                            />
                          </div>
                          <ErrorMessage
                            name="rate"
                            className={Style.erorMsg}
                            component="div"
                          />
                        </>
                      )}

                      <div className={Style.frm_contnr}>
                        <Field
                          name="phNumber"
                          render={({ field, form }) => (
                            <div>
                              <PhoneInput
                                {...field}
                                country={"pk"}
                                inputProps={{
                                  required: true,
                                }}
                                containerStyle={{ padding: 0, margin: 0 }}
                                inputStyle={{
                                  border: "none",
                                  width: "100%",
                                  outline: "none",
                                  color: "#B4B4B4",
                                  height: "26px",
                                }}
                                buttonStyle={{
                                  border: "none",
                                  background: "none",
                                }}
                                onChange={(value) =>
                                  form.setFieldValue("phNumber", value)
                                }
                                onBlur={() =>
                                  form.setFieldTouched("phNumber", true)
                                }
                              />
                              {/* <ErrorMessage name="phNumber" component="div" /> */}
                            </div>
                          )}
                        />
                      </div>

                      <ErrorMessage
                        name="phNumber"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.frm_contnr}>
                        <Field
                          value={selectedOption}
                          name="country"
                          as="select"
                          className={`${Style.role__style}`}
                          onChange={(event) =>
                            handleSelectCountry(event, setFieldValue)
                          }
                        >
                          <option value="" disabled>
                            Select Country
                          </option>
                          {country?.map((option) => (
                            <option key={option._id} value={option._id}>
                              {option.country}
                            </option>
                          ))}
                        </Field>
                      </div>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className={Style.erorMsg}
                      />
                      <div>
                        <Field
                          id="address"
                          className={Style.txt__area1}
                          name="address"
                          placeholder="Address"
                          as="textarea"
                        />
                      </div>
                      <ErrorMessage
                        name="address"
                        className={Style.erorMsg}
                        component="div"
                      />

                      <div>
                        <Field
                          className={Style.txt__area}
                          id="w3review"
                          as="textarea"
                          name="about"
                          placeholder="About You"
                        />
                      </div>

                      <ErrorMessage
                        name="about"
                        className={Style.erorMsg}
                        component="div"
                      />
                      <div className={Style.agreement}>
                        <div className={Style.check__contnr}>
                          <input type="checkbox" />
                          <span class={Style.checkmark}></span>
                        </div>
                        <h4>
                          I’ve read and agree to{" "}
                          <span className={Style.terms_condition}>
                            <Link
                              to="/termsOfServices"
                              style={{ color: "#ffc700", fontWeight: "600" }}
                            >
                              {" "}
                              Terms & Conditions{" "}
                            </Link>{" "}
                          </span>
                        </h4>
                      </div>
                      <div className={Style.submit_btn_continer}>
                        {btnloader ? (
                          <div className="btnRelative signupBtn">
                            <div class="lds-dual-ring"></div>
                            <button disabled className={Style.sbmt__btn}>
                              CREATE ACCOUNT
                            </button>
                          </div>
                        ) : (
                          <button className={Style.sbmt__btn} type="submit">
                            CREATE ACCOUNT
                          </button>
                        )}
                      </div>
                      <div className={Style.already__sign}>
                        <h4>
                          Already registered?{" "}
                          <span>
                            <Link to="/login">Sign in</Link>
                          </span>
                        </h4>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </Col>
          <Col className={Style.col__paddng}>
            <div className={Style.pic__colm}></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
