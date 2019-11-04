import React, { useState } from 'react'
import Api from "../../services/Api";
import Question from '../question'
import {
  Finalized
} from './styled'

const Challenge = ({
  challengeStatus,
  current
}) => {

  const initializeQuestions = () => {
    const questionsUrl = current[0]._links.self.href
    return getQuestions(questionsUrl)
  }

  const getQuestions = async (questionsUrl) =>{
    return await Api.getQuestions(questionsUrl).then(res => {
      setQuestions(res.data._embedded.questions)
    })
  }
  const [questions, setQuestions] = useState(() => initializeQuestions())
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [finalizedChallenge, setFinalizedChallenge ] = useState(false)

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const submitAnswer = async (questionUrl, optionId) => {
    const response = await Api.postAnswer(questionUrl, optionId)
    console.log(response)
    if(checkIfIsLastQuestion()) {
      setFinalizedChallenge(true)
    }
    else {
      nextQuestion()
    }
  }

  const checkIfIsLastQuestion = () => (
    currentQuestion === questions.length - 1
  )

  const checkIfIsFirstQuestion = () => (
    currentQuestion === 0
  )

  const checkChallengeStatus = () => (
    challengeStatus === 'SCHEDULED'
    ? <div>Esse desafio ainda nao começou</div>
    : (
        <Question
        isFirst={checkIfIsFirstQuestion()}
        isLast={checkIfIsLastQuestion()}
        challengeStatus={challengeStatus}
        submitAnswer={(questionId, optionId) => submitAnswer(questionId, optionId)}
        nextQuestion={() => nextQuestion()}
        previousQuestion={() => previousQuestion()}
        question={questions[currentQuestion]}
      />
      )
  )

  const checkIfIsFinalizedChallenge = () => (
    finalizedChallenge
   ? <Finalized>Voce finalizou o desafio.</Finalized>
   : checkChallengeStatus()
  )

  return questions.length
    ? checkIfIsFinalizedChallenge()
    : <div>Carregando</div>

}

export default Challenge