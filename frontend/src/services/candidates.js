import axios from "axios";
import BASE_URL from "./root";

export const SaveCandidates = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/candidates/`, data, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetCandidates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/candidates/`, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCandidate = async (candidateId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/candidates/${candidateId}`,
      {
        withCredentials: false,
      }
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdateCandidate = async (candidateId) => {
  try {
    const res = await axios.patch(`${BASE_URL}/candidates/${candidateId}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
