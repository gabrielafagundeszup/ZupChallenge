import React, { useState } from 'react'
import Question from '../question'

const questions = {
  questions: [
    {
      "id": "a40a5a5f-1e46-4e98-878c-a427a9cc038a",
      "name": "Foo",
      "status": "PENDING",
      "_links": {
        "self": {
          "href": "/questions/a40a5a5f-1e46-4e98-878c-a427a9cc038a"
        }
      }
    },
    {
      "id": "a40a5a5f-1e46-4e98-878c-a427a9cc038a",
      "name": "Zoo",
      "status": "WRONG",
      "_links": {
        "self": {
          "href": "/questions/a40a5a5f-1e46-4e98-878c-a427a9cc038a"
        }
      }
    },
    {
      "id": "a40a5a5f-1e46-4e98-878c-a427a9cc038a",
      "name": "Too",
      "status": "PENDING",
      "_links": {
        "self": {
          "href": "/questions/a40a5a5f-1e46-4e98-878c-a427a9cc038a"
        }
      }
    },
    {
      "id": "a40a5a5f-1e46-4e98-878c-a427a9cc038a",
      "name": "Loo",
      "status": "PENDING",
      "_links": {
        "self": {
          "href": "/questions/a40a5a5f-1e46-4e98-878c-a427a9cc038a"
        }
      }
    }
  ]
}

const Challenge = ({
  challengeStatus
}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [finalizedChallenge, setFinalizedChallenge ] = useState(false)

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }

  const submitAnswer = (questionId, optionId) => {
    console.log('SUBMETER RESPOSTA AO BACK')
    if(checkIfIsLastQuestion()) {
      setFinalizedChallenge(true)
    }
    else {
      nextQuestion()
    }
  }

  const checkIfIsLastQuestion = () => (
    currentQuestion === questions.questions.length - 1 
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
        question={questions.questions[currentQuestion]}
      />
    )
  )

  return (
    finalizedChallenge
   ? <div>Voce finalizou o desafio.</div>
   : checkChallengeStatus()
  )
}

export default Challenge