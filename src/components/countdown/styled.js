import styled from 'styled-components'

export const CountdownWrapper = styled.div`
display: flex;
flex-wrap: wrap;
font-size: 40px;
align-items: center;
color: #fff;
`

export const CountdownItem = styled.div`
font-family:${({ theme }) => theme.typography.families.text};
color: #fff;
font-size: 10rem;
display: flex;
align-items: center;
flex-direction: column;
width: 200px;
& span{
  font-family:${({ theme }) => theme.typography.families.text};
	font-size: 12px;
	font-weight: 600;
  text-transform: uppercase;
  position: relative;
    top: -15px;
}
`