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
    font-size:3rem;
}
& .MuiInput-underline:before,.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid #fff;
}
& .MuiInput-underline:before{
    border-bottom: 1px solid #fff;
}
`