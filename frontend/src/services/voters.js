import axios from "axios";
import BASE_URL from "./root";

export const GetVoters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/voters`, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const SaveVoter = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/voters`, data, {
      withCredentials: false,
    });
    // const res = await GetVoters();
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteVoter = async (studentId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/voters/${studentId}`, {
      withCredentials: false,
    });

    return response;
  } catch (error) {
    console.log(error.message);
  }
};
