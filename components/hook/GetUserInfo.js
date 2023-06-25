import { useState, useEffect } from "react";
import axios from "axios";

const useGetUser = (id) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:3000/api/getuser/${id}`
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getUserData();
  }, [id]);

  return { userData, loading, error };
};

export default useGetUser;
