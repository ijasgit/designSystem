import axios from "axios";
import axiosInstance from "../Back-end/middleware/int";

function method(input) {
  return axiosInstance.get("/api/data");
}

const ApiServices = {
  method,
};
export default ApiServices;
