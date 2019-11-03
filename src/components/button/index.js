import React from 'react'
import {StyledButton, BigButton} from './styled'
import { Link } from "react-router-dom";

const Button = props =>{

    if(props.type=== 'big'){
        if(props.path){
            return  <Link to={props.path}><BigButton>{props.children}</BigButton></Link>
        }
        return(
                <BigButton>{props.children}</BigButton>
        )
    }

    if(props.path){
        return  <Link to={props.path}><StyledButton>{props.children}</StyledButton></Link>
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