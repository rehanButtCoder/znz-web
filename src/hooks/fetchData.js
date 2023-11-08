import { useState, useEffect } from "react";
import axios from '../services/BaseUrl';

const useFetchData = (url, config) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response
        if (config) {
          response = await axios.get(url, config);
        } else {
          response = await axios.get(url);
        }
        setData(response.data);
      } catch (error) {
        setError(error.response);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useFetchData;