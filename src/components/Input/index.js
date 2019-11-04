import React, {useState} from "react";
import { Field,IconContainer } from './styled'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


function TextInput(props) {
    const { value, onChange, label,size,icon,type } = props
    const [viewPassword,setViewPassword] = useState(false)
    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#fff',
                main: 'rgb(23, 105, 170)',
                dark: '#0ba3b9'
            },
            secondary: {
                main: '#f44336',
            },
        },
        typography: {
            useNextVariants: true
        }
    });
    return (
        <MuiThemeProvider theme={theme}>
            <Field size={size}>
                <InputLabel htmlFor="component-simple">{label}</InputLabel>
                <Input 
                id="component-simple" 
                type={!type || (type=== "password" && viewPassword) ? 'text' : 'password'}
                value={value ? value: ''} 
                onChange={onChange}
                endAdornment={
                <InputAdornment position="end">
                <IconContainer onClick={()=>setViewPassword(!viewPassword)}>
                    {icon && type!== "password" && icon}
                    { type=== "password" && !viewPassword && <FontAwesomeIcon icon={faEye} />}
                    { type=== "password" && viewPassword && <FontAwesomeIcon icon={faEyeSlash} />}
                </IconContainer>
                </InputAdornment>
                }
                />
            </Field>
        </MuiThemeProvider>

    );
}

export default TextInput


