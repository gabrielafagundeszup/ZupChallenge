import React from "react";
import { Field } from './styled'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


class TextInput extends React.Component {

    render() {
        const {onChange, value} = this.props
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
            <MuiThemeProvider theme = { theme }>
            <Field >
                <InputLabel htmlFor="component-simple">Search Player</InputLabel>
                <Input id="component-simple" value={value} onChange={() => this.onChange} />
            </Field>
            </MuiThemeProvider>

        );
    }
}

export default TextInput
