import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl';

export const Field = styled(FormControl)`
width:100%;
margin-bottom:4rem;
border-color:#fff;
& label{
    font-family:${({ theme }) => theme.typography.families.text};
    font-weight:bold;
    color:#fff;
}
& input{
    font-family:${({ theme }) => theme.typography.families.text};
    font-weight:bold;
    color:#fff;
    font-size:${props => props.size === 'small' ? '1rem' : '3rem'};
}
& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid #fff;
}
& .MuiInput-underline:before{
    border-bottom: 1px solid #fff;
}

& input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #02222500 inset !important;
    /*use inset box-shadow to cover background-color*/
    -webkit-text-fill-color: #fff !important;
    /*use text fill color to cover font color*/
}

& input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-webkit-autofill:valid,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus
{
    -webkit-transition-delay: 99999s;
    -webkit-text-fill-color:#D7D8CE;
}
`

export const IconContainer = styled.div`
color:#fff;
cursor:pointer;
`

