import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height:100vh;
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
margin-top:15px;
`