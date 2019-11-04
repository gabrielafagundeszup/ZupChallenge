

import styled from 'styled-components'

export const BodyBackground = styled.div`
background-color:#011215;
position:relative;
min-height:100vh;
&>div>canvas{
    position: absolute;
}

`;

export const BodyContainer = styled.div`
position: relative;
    z-index: 1;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CenterContainer = styled.div`
width:70%;
@media (max-width: 768px) {
    width:80%;
  }
`