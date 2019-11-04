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
`

export const LoginContainer= styled.div`
width: 30%;
    background-color: #022225e0;
    padding: 3rem 5rem; 
    margin-top: 3rem;
    border-radius: 0.8rem;
    position: relative;
    display: flex;
    flex-direction: column;
`


export const InputContainer= styled.div`
margin-bottom:3rem;
& >div{
  margin-top:1.5rem;
}
`

