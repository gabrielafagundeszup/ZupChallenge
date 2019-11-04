import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  background-color:${({ theme }) => theme.palette.blues.darkest};
  padding: 16px 10px;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width:70%;
  @media (max-width: 768px) {
    width:90%;
  }
`

export const Menu = styled.div`
color:#fff;
font-family:${({ theme }) => theme.typography.families.text};
display: flex;
align-content: center;
justify-content: space-between;
align-items: center;
`

export const ItemContainer = styled.div`
display:flex;
align-items:center;
@media (max-width: 768px) {
  display:none;
}
`
export const ItemContainerMobile = styled.div`
display:flex;
align-items:center;
& svg{
  font-size: 1.5rem;
  cursor:pointer;
}
@media (max-width: 768px) {
  display:block;
}
@media (min-width: 769px) {
  display:none;
}
`

export const MenuMobileContainer = styled.div`
position: absolute;
    z-index: 10;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #095d6b;
    margin-top: 10px;
    border-radius: 5px;
    padding: 15px 0;
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
  @media (max-width: 768px) {
    padding:10px 0 ;
    border-bottom: 1px solid #fff;
    margin-right:0;
    &:after:{
      width:0;
      opacity:0;
    }
    &:hover:after{
      width:0;
      opacity:0;
    }
  }
`

export const SpanMenu = styled.span`
padding: 0 10px;
`

export const SignOut = styled.div`
& svg{
  margin-left:10px;
  color:#FEBC15;
  cursor:pointer;
}
`




