import axios from "axios";

const URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://protected-thicket-50870.herokuapp.com";

export default axios.create({
  baseURL: URL,
});
