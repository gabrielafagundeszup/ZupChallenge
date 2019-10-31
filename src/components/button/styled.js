import styled from 'styled-components'


export const StyledButton = styled.button`
  background-color:${({ theme }) => theme.palette.yellow.dark};
  color:#000;
  border-radius: 1000px;
  padding: 10px 20px;
  font-family:${({ theme }) => theme.typography.families.text};
  border:0;
  cursor:pointer;
  font-weight:${({ theme }) => theme.typography.weights.bold};
`

export const BigButton = styled.button`
  background-color:${({ theme }) => theme.palette.yellow.dark};
  color:#000;
  border-radius: 1000px;
  padding: 10px 50px;
  font-family:${({ theme }) => theme.typography.families.text};
  border:0;
  cursor:pointer;
  font-weight:${({ theme }) => theme.typography.weights.bold};
  font-size: 1.5rem;
  box-shadow: 5px 6px #00000040;
`