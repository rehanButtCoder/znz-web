// useAuthToken.js
import { useSelector } from 'react-redux';

const useAuthToken = () => {
  return useSelector((state) => state.user.userData.token);
};

export default useAuthToken;
