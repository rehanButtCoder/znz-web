import axios from "../BaseUrl";

export const createJob = async (body, token,id) => {
  // debugger;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`PostAJob/${id}`, body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const updateJob = async (id, body, token) => {
  // debugger;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.put(`updateAJob/${id}`, body, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getAllJobs = async (token) => {
  // debugger;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`/getAllJobs`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
export const getSingleJob = async (id, token) => {
  // debugger;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(`/getAJobByID/${id}`, config);
    return response;
  } catch (err) {
    return err.response;
  }
};
