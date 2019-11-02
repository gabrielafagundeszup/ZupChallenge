import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.span`
  font-family:${({ theme }) => theme.typography.families.text};
  background-color: ${({ theme }) => theme.palette.neutral.lightest};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 9px;
  margin: 3rem 0;
  padding: 5px 20px;
  color:${({ theme }) => theme.palette.blues.darkest};
  z-index: 1;
`

export const ChallengesWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ChallengeItem = styled.div`
font-family:${({ theme }) => theme.typography.families.text};
font-weight:bold;
font-size: 1rem;
background-color: #053842c7;
    padding: 5rem 2rem;
    color: #fff;
    text-decoration: none;
    position: relative;

`