
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
  getQuestions: ( questionsUrl ) =>
    axios.get(
      `${url.BASE_URL}${questionsUrl}`
    ),
  getQuestion: ( questionUrl ) =>
    axios.get(
      `${url.BASE_URL}${questionUrl}`
    ),
  postAnswer: ( questionUrl, choiceId ) => 
      axios.post(`${url.BASE_URL}${questionUrl}/answers`, { choice: choiceId }
      )
};

export default Services;
