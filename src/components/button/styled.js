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
  & a{
    color:#000;
    text-decoration:none;
  }
`

export const BigButton = styled.button`
  background-color:${({ theme }) => theme.palette.yellow.dark};
  background-color: ${(props,theme) => !props.disabled ? "#FEBC15" : "#061c1f"};
  color:#000;
  border-radius: 1000px;
  padding: 10px 50px;
  font-family:${({ theme }) => theme.typography.families.text};
  border:0;
  cursor:${props => !props.disabled ? 'not-allowed' : 'pointer'};
  font-weight:${({ theme }) => theme.typography.weights.bold};
  font-size: 1.5rem;
  box-shadow: 5px 6px #00000040;
  & a{
    color:#000;
    text-decoration:none;
  }
`