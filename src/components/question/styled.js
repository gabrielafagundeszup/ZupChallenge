import styled, { css } from 'styled-components'

export const WrapperQuestion = styled.div`
  display: flex;
  background: ${({ theme }) => theme.palette.blues.dark};
  flex-direction: column;
  min-width: 300px;
  max-width: 700px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.size16};
  border-radius: 5px;
`
export const WrapperOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.size16};
`
export const StyledQuestion = styled.div`
  padding: ${({ theme }) => theme.spacing.size16};
`
export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 200px;
  padding: ${({ theme }) => theme.spacing.size8};
`
export const Title = styled.div`
  align-self: center;
  font-size: ${({ theme }) => theme.typography.size.SM};
  font-weight:  ${({ theme }) => theme.typography.weights.bold};
  padding: ${({ theme }) => theme.spacing.size16};
`
export const Option = styled.input`
  padding: ${({ theme }) => theme.spacing.size16};
`
export const Label = styled.label`
  padding: ${({ theme }) => theme.spacing.size16};
  ${props => props.isCorrect && css`
  color: ${({ theme }) => theme.palette.correct};
`}
`