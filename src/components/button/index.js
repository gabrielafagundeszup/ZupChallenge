import React from 'react'
import {StyledButton, BigButton} from './styled'

const Button = props =>{

    if(props.type=== 'big'){
        return(
            <BigButton>
                {props.children}
            </BigButton>
        )
    }
    return(
        <StyledButton>
            {props.children}
        </StyledButton>
    );
}

export default Button;