
import axios from "axios";
import * as url from "../core/constants/Services";

const Services = {

  customEndPoint: (url) =>
    axios.get(
      `https://challenges.cdt.one/_${url}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ),
  getUsers: () =>
    axios.get(
      `${url.BASE_URL}/users`
    ),
  getChallenges: () =>
    axios.get(
      `${url.BASE_URL}/challenges`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ),
  authUser: (data) =>
    axios.post(
      `${url.BASE_URL}/auth/login`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ),
    signUp: (data) =>
    axios.post(
      `${url.BASE_URL}/users`,
      data
    ),
  getQuestions: (questionsUrl) =>
    axios.get(
      `${url.BASE_URL}${questionsUrl}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ),
  getQuestion: (questionUrl) =>
    axios.get(
      `${url.BASE_URL}${questionUrl}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      }
    ),
  postAnswer: (questionUrl, choiceId) =>
    axios.post(`${url.BASE_URL}${questionUrl}/answers`, { choice: parseInt(choiceId) },
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    }
    )

};

export default Services;
