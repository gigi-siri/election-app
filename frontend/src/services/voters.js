import axios from "axios";
import BASE_URL from "./root";

export const GetVoterByStudentId = async (studentId) => {
  try {
    const res = await axios.get(`${BASE_URL}/voters/${studentId}`, {
      withCredentials: false,
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetVoters = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/voters`, {
      withCredentials: false,
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const SaveVoter = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/voters`, data, {
      withCredentials: false,
    });
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
export const UpdateVoter = async (studentId) => {
  try {
    const res = await axios.patch(`${BASE_URL}/candidates/${studentId}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
