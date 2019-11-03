import styled from 'styled-components'
import { Link } from "react-router-dom";

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


export const ChallengeLink = styled(Link)`
cursor:${props => props.status ==='Moment' ? 'pointer': 'not-allowed'};
background-color: ${props => props.status ==='Moment' && "#078294f5"};
background-color: ${props => props.status ==='Finish' && "#06313af7"};
background-color: ${props => props.status ==='Schedule' && "#06313af7"};
text-decoration: none;
height: 100%;
margin-bottom: 2rem;
`

export const ChallengeItem = styled.div`
font-family:${({ theme }) => theme.typography.families.text};
font-weight:bold;
font-size: 1rem;
color: #011619;
text-decoration: none;
position: relative;
width: 20rem;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
text-transform: uppercase;
letter-spacing: 1.2px;
height: 12rem;

`
export const IconBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 0.8rem;
& svg{
  font-size: 3rem;
}
& span{
  margin-top:10px;
}
`

export const TitleContainer = styled.div`
  padding: 10px 20px;
  font-size: 0.7rem;
  background-color: ${props => props.status === 'Moment' ? "#3799a7" : "#02272da6"};
  color: #000;
`



export const IconContainer = styled.div`
height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`





