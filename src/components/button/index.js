import React from 'react'
import {StyledButton, BigButton} from './styled'
import { Link } from "react-router-dom";

const Button = props =>{

    if(props.type=== 'big'){
        return(
            <BigButton>
                {props.path ? <Link to={props.path}>{props.children}</Link> : props.children}
                
            </BigButton>
        )
    }
    return(
        <StyledButton onClick={() => props.onClick()}>
            {props.path ? <Link to={props.path}>{props.children}</Link> : props.children}
        </StyledButton>
    );
}

Button.defaultProps = {
    onClick: () => {}
}


export default Button;