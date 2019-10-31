

import styled from 'styled-components'
import background from '../../core/assets/img/background.png';
import curves from '../../core/assets/img/ShadowImage.png'

export const BodyBackground = styled.div`
position: relative;
height:100vh;
background: #009bb7; /* Old browsers */
background: -moz-linear-gradient(top, #009bb7 0%, #024754 50%, #031f24 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #009bb7 0%,#024754 50%,#031f24 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #009bb7 0%,#024754 50%,#031f24 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#009bb7', endColorstr='#031f24',GradientType=0 ); /* IE6-9 */
overflow:hidden;
`;

export const CurvesBackground=styled.div`
height:100vh;
background: url(${curves});
background-size: cover;
opacity: 0.4;
mix-blend-mode: color-burn;
display: -ms-flexbox;
position: absolute;
bottom: 0;
left: 0;
z-index: 0;
width: 100%;
height: 100vh;
`

export const BodyContainer = styled.div`
height:100vh;
background: url(${background});
background-size: cover;
opacity: 0.9;
`

export const VideoTag = styled.video`
position:absolute;
`