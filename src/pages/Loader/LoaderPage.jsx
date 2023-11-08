import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../services/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/Loader";

const LoaderPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEmailClickedFunc = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/userEmailVerification/${id}`);
      // debugger
      // if (response.data.data.user.role.role === "seller") {
      if (response.status === 200) {
        toast.success(response?.data?.message || "Email Verified");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      // if (error.response) {
      toast.error(error.response.data?.message || "Server Error");
      // } else if (error.request) {
      //   toast.error("Request error. Please try again.");
      // } else {
      //   toast.error("An error occurred. Please try again later.");
      // }
      setTimeout(() => {
        navigate("/resend-email");
      }, 2500);
    }
  };

  useEffect(() => {
    isEmailClickedFunc();
  }, []);

  return (
    <>
      <ToastContainer />
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    </>
  );
};

export default LoaderPage;
