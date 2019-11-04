import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
padding: 10px 20px;
background-color: transparent;
font-family:${({ theme }) => theme.typography.families.text};
@media (max-width: 768px) {
  padding: 15px 10px;
} 
`

export const InfoDescription = styled.div`
display: flex;
    align-items: center;
    background-color: transparent;
`

export const NameDescription = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
`

  export const UserContainer = styled.div`
  width: 100%;
& div.users{
  background-color: #fff;
}
& div.users:nth-child(1){
  background-color: ${({ theme }) => theme.palette.yellow.dark};
}
& div.users:nth-child(2){
  background-color: ${({ theme }) => theme.palette.yellow.medium};
}
& div.users:nth-child(3){
  background-color: ${({ theme }) => theme.palette.yellow.light};
}
`

export const Name = styled.span`
font-weight:bold;
font-size:18px;
`

export const SmallText = styled.span`
font-size:14px;
font-weight:300;
@media (max-width: 768px) {
    font-size:12px;
} 
`

export const Points = styled.span`
font-size:24px;
font-weight:700;
@media (max-width: 768px) {
  display: flex;
    flex-direction: column;
    align-items: center;
    font-size:18px;
} 
`

export const Index = styled.div`
font-weight:bold;
font-size:18px;
padding-right:20px;
@media (max-width: 768px) {
  padding-right:10px;
} 
`
