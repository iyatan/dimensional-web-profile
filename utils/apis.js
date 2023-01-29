import axios from "axios";

const baseURL =
  "https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app";

export const getProfile = async () => {
  try {
    const res = await axios.get(`${baseURL}/profiles/`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
