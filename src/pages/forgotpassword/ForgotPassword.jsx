import React from "react";
import style from "./forgotPassword.module.css";
import { useFormik } from 'formik';
import { forgotPassEmail } from "../../services/email/ForgotPass";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
// import ProfileCard from "./card/ProfileCard";
const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
    })
    ,
    onSubmit: async (values) => {
      // console.log(values);
      let resp = await forgotPassEmail(values);
      if (resp.status === 200) {
        // console.log(resp?.data?.message);
        toast.success(resp?.data?.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

      }
      else {
        toast.error(resp?.data?.message);
      }
      // console.log(resp);

    },
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <div>
        <form onSubmit={formik.handleSubmit} className={style.form__container}>
          <h2 className={style.form__title}>Forgot Your Password?</h2>
          <p className={style.title__para}>
            Enter the email address associated with your account <br />
            and we’ll send you a link to reset your password.
          </p>
          <div className={style.input__main__container}>
            <p className={style.input__label}>Email Address</p>
            <div className={style.input__container}>
              <input
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={style.input__field}
                placeholder="Email Address"
              />
              {formik.errors.email ? <div style={{ color:"red",fontSize:"15px" }}>{formik.errors.email}</div> : null}
            </div>
            <div className={style.submit__container}>
              {/* <input
                type="button"
                className={style.submit__btn}
                value={"Forgot Password"}
                onClick={()=>{navigate('/reset-password')}}
              /> */}
              <button className={style.submit__btn} type="submit">Submit</button>
            </div>
            <h5 className={style.backto__login}>
              Back to{" "}
              <a href="#" className={style.back__login}>
                log in
              </a>
            </h5>
          </div>
        </form>
      </div>
      {/* <ProfileCard /> */}
    </React.Fragment>
  );
};

export default ForgotPassword;
