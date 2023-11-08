import React, { useState } from "react";
import style from "./Login.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../features/user/userSlice";
import { useEffect } from "react";

function LoginMain() {
  const userRole = useSelector(
    (state) => state.user.userData?.user?.role?.role
  );

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [btnloader, setBtnLoader] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    // password: Yup.string()
    //   .min(8, "Password must be at least 8 characters")
    //   .max(15, "Password must be at most 15 characters")
    //   .required("This field is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // handling request
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setBtnLoader(true);
    const resp = await login(values);
    if (resp.status === 200) {
      
      dispatch(addUserData(resp.data.data));
      // localStorage.setItem("znz_website", JSON.stringify(resp.data));

      if (resp.data?.data?.user?.role?.role === "seller") {
        setTimeout(() => {
          navigate("/seller-profile");
        }, 100);
      } else {
        setTimeout(() => {
          navigate("/clientprofilepage");
        }, 100);
      }
    } else {
      toast.error(resp.data.message || "Server Error");
      setBtnLoader(false);
    }
  };
  useEffect(() => {
    if (userRole === "seller") {
      navigate("/seller-profile");
    } else if (userRole === "buyer") {
      navigate("/clientprofilepage");
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <div className={style.formLoginMain}>
        <Container className={style.main_container_login}>
          <div className={style.signInMain}>
            {/* <h4 className={style.login_heading}>login page</h4> */}
            <Link to="/">
              <img
                className={style.loginLogo}
                src="/asserts/images/logo/ZNZ logo_1.png"
                alt=""
              />
            </Link>
            <p className={style.login_para}>
              Securely access your account and unlock exclusive features.
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-70 align-items-center">
                  <label
                    htmlFor="email"
                    // className=
                    className={`mb-3 ${style.formInputs}`}
                  >
                    Email Address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    // onChange={Formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.email}
                    className={style.inp}
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />

                  <label
                    htmlFor="password"
                    className={`mt-4 mb-3 ${style.formInputs}`}
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.firstName}
                    className={`mb-1 ${style.inp}`}
                    placeholder="1235"
                  />
                  {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  /> */}
                  <Link to="/forgot-password" className={style.forgot_pswrd}>
                    Forgot Password ?
                  </Link>

                  <div className={style.btn_login_outer}>
                    {/* <button
                      style={{ borderRadius: "10px", border: "unset" }}
                      type="submit"
                      // disabled={isSubmitting}
                      className={isSubmitting ? `${style.none}` : ""}
                    >
                      Log In
                    </button> */}
                    {btnloader ? (
                      <div className="btnRelative">
                        <div class="lds-dual-ring"></div>
                        <button
                          style={{ borderRadius: "10px", border: "unset" }}
                          disabled
                        >
                          Log In
                        </button>
                      </div>
                    ) : (
                      <button
                        style={{ borderRadius: "10px", border: "unset" }}
                        type="submit"
                      >
                        Log In
                      </button>
                    )}
                  </div>
                  <div className="mt-4">
                    {" "}
                    <p style={{ textAlign: "center" }}>
                      Don’t have an account?{" "}
                      <span className={style.inderline}>
                        {" "}
                        <Link to="/signup">Create an account</Link>
                      </span>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LoginMain;
