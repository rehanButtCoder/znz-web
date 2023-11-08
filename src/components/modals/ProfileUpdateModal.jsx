/* eslint-disable no-mixed-operators */
import { userSignup } from "../../services/user/signup";
import { ToastContainer, toast } from "react-toastify";
import { uploadImage } from "../../services/uploads/imageUpload";
import { countryData } from "../../services/seeders/Country";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../clientProfile/edit.module.css";
import Style from "../clientProfile/clientprofile.module.css";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import { Field, Form, Formik, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import Button from "react-bootstrap/Button";
import { sellerRoleId } from "../../utils/constants";
import { updateUser } from "../../services/user/updateUser";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, addUserLoginData } from "../../features/user/userSlice";

const ProfileUpdateModal = (props) => {
  //   const { defaultValues } = props; // Receive default values from props
  const [btnloader, setBtnLoader] = useState(false);
  // console.log(props?.data?.role);
  const [country, setCountry] = useState();
  const getFunc = async () => {
    const response = await countryData();
    if (response?.status === 200) {
      setCountry(response?.data?.countryData);
    }
  };
  useEffect(() => {
    getFunc();
  }, []);

  // let navigate = useNavigate();
  // for image
  const [picture, setPicture] = useState(null);
  // let incomingImg = props?.data?.image;

  const [imgData, setImgData] = useState();
  //   console.log("props?.data?.image " + props?.data?.image);
  // console.log("imgData " + props?.data?.image);
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
  // const [isSeller, setIsSeller] = useState(false);
  // const [isSellerBE, setIsSellerBE] = useState("6478b7810707f58c685954fc");

  // const selectRole = (e) => {
  //   const selectedValue = e.target.value;
  //   if (selectedValue === "6478b7810707f58c685954fb") {
  //     setIsSeller(true);
  //     setIsSellerBE(selectedValue);
  //   } else {
  //     setIsSeller(false);
  //     setIsSellerBE(selectedValue);
  //   }
  // };

  // country
  // let inComingCountry = props?.data?.country?._id;
  // console.log(inComingCountry);
  const [selectedOption, setSelectedOption] = useState();
  const handleSelectCountry = (event, setFieldValue) => {
    const { value } = event.target;
    setSelectedOption(value);
    setFieldValue("country", value);
  };
  useEffect(() => {
    // Set the selectedOption state based on the value from props
    setSelectedOption(props?.data?.country?._id || "");
  }, [props?.data?.country?._id]);

  //   console.log(props?.data?.image);
  // initial values
  const initialValues = {
    fName: props?.data?.first_name || "",
    lName: props?.data?.last_name || "",
    language: props?.data?.language || "",
    phNumber: props?.data?.phone_no || "",
    country: selectedOption || "",
    address: props?.data?.address || "",
    about: props?.data?.service_Description || "",
    // ...(props?.data?.role === sellerRoleId
    //   ? {
    //       service: "",
    //       rate: "",
    //     }
    //   : {}),
  };

  // validation
  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    language: Yup.string().required("Langauge required"),
    phNumber: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    about: Yup.string().required("Message is required"),
    // ...(props?.data?.role === sellerRoleId
    //   ? {
    //       service: "",
    //       rate: "",
    //     }
    //   : {}),
  });
  //   console.log(isSellerBE);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setBtnLoader(true);
    const data = {
      // role: isSellerBE,
      first_name: values.fName,
      last_name: values.lName,
      // service_Title: values.service,
      // hourly_rate: values.rate,
      country: selectedOption,
      phone_no: values.phNumber,
      service_Description: values.about,
      address: values.address,
      language: values.language,
    };
    // debugger
    // if (isSellerBE === "6478b7810707f58c685954fb") {
    //   data["service_Title"] = values.service;
    //   data["hourly_rate"] = values.rate;
    // }
  
    if (picture) {
      const formDataImg = new FormData();
      formDataImg.append("file", picture);
      const imageResponse = await uploadImage(formDataImg);
      data.image = imageResponse.data.url;
    }
    const resp = await updateUser(props?.data?._id, userData?.token, data);

    if (resp.status === 200) {
      // dispatch(addUserData(resp.data.data));
      dispatch(addUserLoginData(resp?.data?.user));
      toast.success(resp?.data?.message || "User Details Updated");
      setTimeout(() => {;
        props.onHide();
      }, 1000);
      setBtnLoader(false);
    } else {
      toast.error(resp.data.message || "Unkown Error");
      setBtnLoader(false);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ToastContainer />
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className={Style.form__sectn}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <div className={Style.outer_frm}>
                <Form className={Style.form__style}>
                  {/* {(props?.data?.image || imgData) && ( */}
                  <img
                    className={Style.imageSize}
                    src={imgData || props?.data?.image}
                    alt=""
                  />
                  {/* )} */}
                  <div className={style.upload_container}>
                    <input
                      type="file"
                      id="actual-btn"
                      hidden
                      accept="image/*"
                      // name="image"
                      onChange={(e) => imagesPreview(e)}
                    />

                    <label for="actual-btn" className={style.pic__upload__btn}>
                      <span>Upload Photo</span>
                    </label>
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

                  {/* {isSeller && (
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
                  )} */}

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
                              color: "#888888",
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
                      style={{ color: "#888888" }}
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
                      style={{ color: "#888888" }}
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
                      style={{ color: "#888888" }}
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
                  <Modal.Footer>
                    <Button onClick={props.onHide} className={Style.modal__btn}>
                      Close
                    </Button>
                    <Button
                      disabled={btnloader}
                      type="submit"
                      className={Style.modal__btn}
                    >
                      Update
                    </Button>
                  </Modal.Footer>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileUpdateModal;
