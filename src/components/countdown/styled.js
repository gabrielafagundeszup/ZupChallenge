import styled from 'styled-components'
import { Link } from "react-router-dom";

export const CountdownWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
font-size: 40px;
    align-items: baseline;
    color:#fff;
`

export const CountdownItem = styled.div`
font-family:${({ theme }) => theme.typography.families.title};
color: #fff;
font-size: 90px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 10px;
padding-top: 10px;
position: relative;
width: 100px;
height: 100px;
& span{
  font-family:${({ theme }) => theme.typography.families.text};
	font-size: 12px;
	font-weight: 600;
  text-transform: uppercase;
  position: relative;
    top: -15px;
}
`