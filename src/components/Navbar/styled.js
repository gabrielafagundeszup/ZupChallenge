import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  width:100%;
  background-color:${({ theme }) => theme.palette.blues.darkest};
  padding: ${({ theme }) => theme.spacing.size16} 0;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width:70%;
`

export const Menu = styled.div`
color:#fff;
font-family:${({ theme }) => theme.typography.families.text};
display: flex;
align-content: center;
justify-content: space-between;
`

export const ItemContainer = styled.div`
display:flex;
align-items:center;
`

export const ItemMenu = styled(Link)`
  color: #fff;
  font-family: Quicksand;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
  font-size: 12px;
  cursor: pointer;
  margin-right:20px;
  position: relative;
  text-decoration:none;
  &:after{
    content: '';
    top: 20px;
    bottom: -6px;
    right: 50%;
    position: absolute;
    -webkit-transition: all 0.5s;
    transition: all 1s;
    opacity: 0;
    width: 80%;
    background-color: ${({ theme }) => theme.palette.yellow.dark};
    transform: translateX(50%);
  }
  &:hover{
    color:${({ theme }) => theme.palette.yellow.dark};
  }
  &:hover:after{
    opacity: 1;
  }
`
export const SignOut = styled.div`
& svg{
  margin-left:10px;
  color:#FEBC15;
}

`




