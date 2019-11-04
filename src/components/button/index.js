import React from 'react'
import {StyledButton, BigButton} from './styled'
import { Link } from "react-router-dom";

const Button = props =>{
    if(props.type=== 'big'){
        if(props.path){
            return  <Link to={props.path ? props.path : '/'}><BigButton disabled={!props.disabled}>{props.children}</BigButton></Link>
        }
        return(
                <BigButton onClick={() => props.disabled && props.onClick()}>{props.children}</BigButton>
        )
    }

    if(props.path){
        return  <Link to={props.path}><StyledButton>{props.children}</StyledButton></Link>
    }
    return(
        <StyledButton disabled={props.disabled} onClick={() => !props.disabled && props.onClick()}>
            {props.path && props.disabled ? <Link to={props.path}>{props.children}</Link> : props.children}
        </StyledButton>
    );
}

Button.defaultProps = {
    onClick: () => {}
}


export default Button;