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