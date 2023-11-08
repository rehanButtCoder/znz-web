import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import style from "./Signup.module.css";
import { ToastContainer, toast } from "react-toastify";
import { sendingConfirmEmail } from "../../services/email/email";
import { useSearchParams } from "react-router-dom";

const ResendEmailPage = () => {
  const [queryParameters] = useSearchParams();
  const [loading, setLoading] = useState(false);

  // const [btnloader, setBtnLoader] = useState(false);
  // console.log(queryParameters.get('email'));
  const emailSend = async () => {
    setLoading(true);
    const resp = await sendingConfirmEmail(queryParameters.get("email"));
    if (resp.status === 200) {
      toast.success(resp?.data?.message || "Email sent");
      setLoading(false);
    } else {
      toast.error(resp?.data?.message || "Server Error");
      setLoading(false);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <div className={style.innerText}>
        <h2>Confirm your email</h2>
        <p>
          We sent you a confirmation link to your email:
          <br />
          Confirm your email to continue your sign up.
        </p>
        <h5>Didn’t receive an email?</h5>
        {loading ? (
          <div className="btnRelative rsendLoder">
            <div class="lds-dual-ring ring"></div>
            <button style={{ borderRadius: "10px", border: "unset" }} disabled>
            Resend Email
            </button>
          </div>
        ) : (
          <button onClick={emailSend}>Resend Email</button>
        )}
      </div>
    </Container>
  );
};

export default ResendEmailPage;
