import React, { useState, useEffect } from 'react'
import Api from "../../services/Api";
import Button from '../button'
import {
  WrapperQuestion,
  WrapperOptions,
  Label,
  Option,
  WrapperButtons,
  Title,
  StyledQuestion
} from './styled'

const Question = ({
  question,
  challengeStatus,
  isLast,
  isFirst,
  nextQuestion,
  previousQuestion,
  submitAnswer
}) => {

  const getQuestion = async () => {
    const questionUrl = question._links.self.href
    await Api.getQuestion(questionUrl).then(res => {
      setCurrentQuestion(res.data);
    });
  }

  const [currentQuestion, setCurrentQuestion] = useState(() => getQuestion())
  const [selectedOption, setSelectedOption] = useState(null)

  const checkIfIsDisabled = () => (
    currentQuestion.status !== 'PENDING'
  )

  const renderdisabledChallengeButtons = () => (
    <WrapperButtons>
      {!isFirst && <Button onClick={() => previousQuestion()}>
        Back
      </Button>}
      {isLast
        ? (
          <Button path='/challenges'>
            Back to Challenges
        </Button>
        )
        : (
          <Button onClick={() => nextQuestion()}>
            Next
        </Button>
        )
      }
    </WrapperButtons>
  )

  const setQuestionUpdate = () => {
    setCurrentQuestion(() => getQuestion())
    setSelectedOption(null)
  }

  useEffect(() => {
    setQuestionUpdate()
  }
    , [question]);

  const renderAbleQuestionButtons = () => (
    <WrapperButtons>
      {!isFirst && <Button onClick={() => previousQuestion()}>
        Voltar
      </Button>}
      <Button onClick={() => submitAnswer(question._links.self.href, selectedOption)}>
        Responder
      </Button>
    </WrapperButtons>
  )

  const renderStatusAnsweredQuestion = () => {
    if (currentQuestion.status === 'CORRECT') {
      return (
        <div>
          Você acertou essa pergunta.
        </div>
      )
    }
    if (currentQuestion.status === 'WRONG') {
      return (
        <div>
          Você errou essa pergunta.
        </div>
      )
    }
    if (currentQuestion.status === 'MISSED') {
      return (
        <div>
          Você não respondeu a essa pergunta na data do desafio.
        </div>
      )
    }
  }

  const renderOptions = () => (
    checkIfIsDisabled()
      ? (
        <WrapperOptions>
          {currentQuestion.choices.map(option => (
            <div key={option.id}>
              <Option
                disabled
                checked={option.checked}
                name="question_options"
                type="radio"
                id={option.id}
              />
              <Label isCorrect={option.isCorrect} htmlFor={option.id}>{option.text}</Label>
            </div>
          ))}
        </WrapperOptions>
      )
      : (
        <WrapperOptions>
          {currentQuestion.choices.map(option => (
            <div key={option.id}>
              <Option
                onChange={ev => setSelectedOption(ev.currentTarget.id)}
                name="question_options"
                type="radio"
                id={option.id}
              />
              <Label htmlFor={option.id}>{option.text}</Label>
            </div>
          ))}
        </WrapperOptions>
      )
  )

  const renderQuestion = () => (
    <StyledQuestion>
      {currentQuestion.text}
    </StyledQuestion>
  )

  const renderTitle = () => (
    <Title>
      {currentQuestion.name}
    </Title>
  )

  const startRenderQuestion = () => (
    <WrapperQuestion key={currentQuestion.id}>
      {renderTitle()}
      {renderQuestion()}
      {currentQuestion.choices && renderOptions()}
      {renderStatusAnsweredQuestion()}
      {checkIfIsDisabled() ? renderdisabledChallengeButtons() : renderAbleQuestionButtons()}
    </WrapperQuestion>
  )

  return currentQuestion
    ? startRenderQuestion()
    : <div> Carregando </div>

}

export default Question