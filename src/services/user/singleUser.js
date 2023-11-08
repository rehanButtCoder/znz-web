import axios from "../BaseUrl";

export const getSingleUser = async (id, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(`getUser/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
