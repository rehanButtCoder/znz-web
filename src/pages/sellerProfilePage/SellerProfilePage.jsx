import React from "react";
import SellerProfile from "../../components/sellerProfile/SellerProfile";
import { getSingleUser } from "../../services/user/singleUser";
import { useEffect } from "react";
// import { userId } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUserLoginData } from "../../features/user/userSlice";
import { getAllJobs } from "../../services/jobs/jobCrud";
import { addAllJobs } from "../../features/job/jobSlice";
const SellerProfilePage = () => {
  const dispatch = useDispatch();
  const userLoggedInData = useSelector((state) => state.user.userLoginData);

  const userData = useSelector((state) => state.user.userData);
  
  const getFunc = async () => {
    const response = await getSingleUser(userData?.user?.id, userData?.token);
    if (response?.status === 200) {
      dispatch(addUserLoginData(response?.data?.user));
    }
  };
  
  const getJobs = async () => {
    const response = await getAllJobs(userData?.token);
    if (response?.status === 200) {
      dispatch(addAllJobs(response?.data?.AllJobs));
    }
  };
  useEffect(() => {
    getFunc();
    getJobs();
  }, []);
  return (
    <React.Fragment>
      <SellerProfile userData={userLoggedInData}  />
    </React.Fragment>
  );
};

export default SellerProfilePage;
