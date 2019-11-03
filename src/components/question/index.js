import React, { useState, useEffect } from 'react'
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

  const options = [ {
    text: 'Essa é a questao 1',
    id: '1',
    isCorrect: true,
  },
  {
    text: 'Essa é a questao 2',
    id: '2',
    isCorrect: false
  },
  {
    text: 'Essa é a questao 3',
    id: '3',
    isCorrect: false,
  },
  {
    text: 'Essa é a questao 4',
    id: '4',
    isCorrect: false,
  },
  {
    text: 'Essa é a questao 5',
    id: '5',
    isCorrect: false,
    checked: true,
  }
  ]
  const [disabledQuestion, setDisabledQuestion] = useState(question.status !== 'PENDING')
  const [selectedOption, setSelectedOption] = useState(null)

  const renderdisabledChallengeButtons = () => (
    <WrapperButtons>
      { !isFirst && <Button onClick={() => previousQuestion()}>
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

  useEffect( () => {
    setDisabledQuestion(question.status !== 'PENDING')
    setSelectedOption(null)
  }, [ question ]);

  const renderAbleQuestionButtons = () => (
    <WrapperButtons>
      { !isFirst && <Button onClick={() => previousQuestion()}>
        Voltar
      </Button>}
      <Button onClick={() => submitAnswer(question.id, selectedOption)}>
        Responder
      </Button>
    </WrapperButtons>
  )

  const renderOptions = () => (
    disabledQuestion
    ? (
      <WrapperOptions>
      {options.map(option => (
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
      {options.map(option => (
        <div key={option.id}>
          <Option
            onChange={ev => setSelectedOption(ev.currentTarget.id)}
            checked={option.id === selectedOption}
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
      {question.name}
    </StyledQuestion>
  )

  const renderTitle = () => (
    <Title>
      {`Question ${question.name}`}
    </Title>
  )

  return (
    <WrapperQuestion key={question.id}>
      {renderTitle()}
      {renderQuestion()}
      {renderOptions()}
      {disabledQuestion ? renderdisabledChallengeButtons() : renderAbleQuestionButtons()}
    </WrapperQuestion>
  )
}

export default Question