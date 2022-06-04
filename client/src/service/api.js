import axios from "axios";

const baseURL = "https://news-app-satya.herokuapp.com";

export const getnews = async () => {
  try {
    return await axios.get(`${baseURL}/getnews`);
  } catch (error) {
    console.log("Errror while calling getnews api");
  }
};
