import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { resetPassword } from "../../services/email/ResetPasswor";
import style from "./passwordReset.module.css";

const PasswordReset = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
          "Must Contain 8 Characters, One Uppercase, Lowercase, One Number and one special case Character"
        ),
    }),
    onSubmit: async (values) => {
      const id = getIDFromURL(); // Get the ID from the URL
      const response = await resetPassword(id, values);
      // Handle the response
      if (response.status === 200) {
        toast.success(response?.data?.message || "Password Updated");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      } else {
        toast.error(response?.data?.message);
      }
    },
  });

  // Function to extract the ID from the URL
  const getIDFromURL = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("id");
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        action="#"
        className={style.form__container}
      >
        <h2 className={style.form__title}>Password Reset</h2>
        <p className={style.title__para}>
          Enter the new a passowrd for your account <br />
          and we’ll reset your password.
        </p>
        <div className={style.input__main__container}>
          {/* <p className={style.input__label}>Email Address</p> */}
          <div className={style.input__container}>
            {/* <input type="email" className={style.input__field} placeholder='Email Address' />
            <br /> */}
            <input
              name="newPassword"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              className={style.input__field}
              placeholder="New Password"
            />
            <br />
            {formik.errors.newPassword ? (
              <div style={{ color: "red", fontSize: "15px" }}>
                {formik.errors.newPassword}
              </div>
            ) : null}
            {/* <input type="password" className={style.input__field} placeholder='Confirm Password' /> */}
          </div>
          <div className={style.submit__container}>
            {/* <input type="button" className={style.submit__btn} value={'Reset Password'} onClick={() => {
              navigate('/login')
            }} /> */}
            <button className={style.submit__btn} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordReset;
