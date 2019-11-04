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
  padding: 5px 20px;
  color:${({ theme }) => theme.palette.blues.darkest};
  z-index: 1;
  text-align: center;
  margin-bottom:1rem;
`

export const FormBox= styled.div`
    background-color: #022225e0;
    margin-top: 3rem;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 3rem;
    }
`

export const LoginContainer= styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
width: 50%;
@media (max-width: 768px) {
  width:auto;
}
`
export const SignUpContainer= styled.div`
display: flex;
flex-direction: column;
padding: 2rem;
width: 50%;
justify-content: center;
    align-items: center;
    background-color: #032a2fdb;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    @media (max-width: 768px) {
      width:auto;
      border-top-right-radius: 0;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    }
`

export const InputContainer= styled.div`
margin-bottom:3rem;
& >div{
  margin-top:1.5rem;
}
`

export const LoginImage= styled.img`
width:12rem
`
export const SignUpDescription = styled.span`
  font-family:${({ theme }) => theme.typography.families.text};
  color: ${({ theme }) => theme.palette.neutral.lightest};
  font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
`

export const ErrorContainer = styled.span`
color: #fff;
font-family: quicksand;
font-size: 0.7rem;
background-color: #bb543c;
border-radius: 10000px;
padding: 5px 20px;
font-weight: 700;
margin: 5px;
min-height: 31px;
display: flex;
align-items: center;
text-align: left;
cursor:pointer;
animation: FadeAnimation 1s ease-in .5s forwards;
& svg{
  margin-right: 10px;
}
& @keyframes FadeAnimation {
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

`




