import axios from "axios";

const api = "http://localhost:8000/api/v1/task";
export const postTask = async (taskObj) => {
  try {
    const { data } = await axios.post(api, taskObj);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
