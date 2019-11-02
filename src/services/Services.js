
import axios from "axios";
import * as url from "../core/constants/Services";

const Services = {
  getUsers: () =>
    axios.get(
      `${url.BASE_URL}/users`
    ),
    getChallenges: () =>
    axios.get(
      `${url.BASE_URL}/challenges`
    ),
};

export default Services;
