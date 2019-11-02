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
  margin-top: 30px;
  padding: 5px 20px;
  color:${({ theme }) => theme.palette.blues.darkest};
  z-index: 1;
`

export const ButtonContainer = styled.div`
margin-top:25px;
`

export const TitleRanking = styled.span`
font-family:${({ theme }) => theme.typography.families.title};
font-size: 5rem;
color: ${({ theme }) => theme.palette.neutral.lightest};
`

export const BolderText = styled.span`
font-family:${({ theme }) => theme.typography.families.text};
font-size:1.2 rem
font-weight:700;
color:#fff;
`

export const LightText = styled.span`
font-family:${({ theme }) => theme.typography.families.text};
font-size:1.2 rem
font-weight:300;
color:#fff;
text-align:center;
`

export const DescriptionContainer = styled.span`
display:flex;
flex-direction:column;
padding: 30px 0 ;
align-items:center;
`

export const Separator = styled.hr`
border: 1px solid #fff;
width: 20%;
`

export const GameContainer = styled.div`
margin:3rem 0 ;
display:flex;
flex-direction:column;
align-items:center;
`
export const ButtonRankingContainer = styled.div`
margin-top:1rem;
margin-bottom:3rem;
`


