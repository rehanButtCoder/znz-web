import React, { useEffect } from "react";
import ClientProfle from "../../components/clientProfile/ClientProfle";
import { getSingleUser } from "../../services/user/singleUser";
import { userId } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUserLoginData } from "../../features/user/userSlice";
const ClientProfiePage = () => {
  const userData = useSelector((state) => state.user.userData);
  const userLoggedInData = useSelector((state) => state.user.userLoginData);
  // console.log(userLoggedInData);
  const dispatch = useDispatch();
  // const [data, setData] = useState();
  const getFunc = async () => {
    const response = await getSingleUser(userData?.user?.id, userData?.token);
    if (response?.status === 200) {
      dispatch(addUserLoginData(response?.data?.user));
    }
  };
  useEffect(() => {
    getFunc();
  }, []);
  // console.log(userData);
  return (
    <div>
      <ClientProfle userData={userLoggedInData} />
    </div>
  );
};

export default ClientProfiePage;
