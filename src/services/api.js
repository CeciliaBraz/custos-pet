import axios from "axios";
import { LOCALHOST_ADDRESS, API_ADDRESS } from "@env";

const localhostAddress = LOCALHOST_ADDRESS;
const apiAddress = API_ADDRESS;

const api = axios.create({
  baseURL: __DEV__
    ? localhostAddress
    : apiAddress,
});

console.log("localhostaddress:");
console.log(localhostAddress);
console.log("api address:");
console.log(apiAddress);
console.log("axios");
console.log(api.getUri());

export default api;
