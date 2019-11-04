
import axios from "axios";
import * as url from "../core/constants/Services";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('access_token')}`
}

var config = {
  headers: headers
};

const Services = {

  customEndPoint: (url) =>
    axios.get(
      `https://challenges.cdt.one/_${url}`,
      config
    ),
  getUsers: () =>
    axios.get(
      `${url.BASE_URL}/users`
    ),
  getChallenges: () =>
    axios.get(
      `${url.BASE_URL}/challenges`, 
      config
    ),
  authUser: (data) =>
    axios.post(
      `${url.BASE_URL}/auth/login`,
      data,
      config
    ),
  getQuestions: (questionsUrl) =>
    axios.get(
      `${url.BASE_URL}${questionsUrl}`,
      config
    ),
  getQuestion: (questionUrl) =>
    axios.get(
      `${url.BASE_URL}${questionUrl}`,
      config
    ),
  postAnswer: (questionUrl, choiceId) =>
    axios.post(`${url.BASE_URL}${questionUrl}/answers`, { choice: parseInt(choiceId) },
    config,
    signUp: (data) =>
    axios.post(
      `${url.BASE_URL}/users`,
      data
    )
};

export default Services;
