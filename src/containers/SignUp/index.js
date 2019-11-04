import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Container, Title, LoginContainer, InputContainer,Error } from './styled'
import Input from '../../components/Input'
import Button from '../../components/button'
import Api from "../../services/Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash'

function Login(props) {
    const { setAuth } = props;
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const redirectToLogin = () => {
        history.push("/login");
    }

    const signUp = async () => {
        if (username && email && password) {
            const obj = {
                username: username,
                email: email,
                password: password
            }
            await Api.signUp(obj).then(response => {
                setAuth(response.data)
                localStorage.setItem('access_token', response.data.token);
                redirectToLogin()
                setError(null)
            }).catch(function (e) {
                setError(e.response.data.message)
                console.log(error)
                });
        }

    }

    const errors = (error && error.length) && error.map(item=>{
        const getLenght = _.get(item.constraints, "length",[])
        const isEmail = _.get(item.constraints, "isEmail",[])
        return <Error key={item.property}><FontAwesomeIcon icon={faTimesCircle} /> {getLenght && getLenght}{isEmail && isEmail}</Error>
    })
    const uniqueError = error && error.length<=1 && <Error><FontAwesomeIcon icon={faTimesCircle} /> {error.message}</Error>
    
    return (
        <Container>
            <LoginContainer>
                <Title>Sign Up</Title>
                {errors}
                {uniqueError}
                <InputContainer>
                    <Input
                        label="Username"
                        value={username}
                        onChange={event=>setUsername(event.target.value)}
                        size="small"
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                    />
                    <Input
                        label="Email"
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        size="small"
                        icon={<FontAwesomeIcon icon={faUser} />}
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={event=>setPassword(event.target.value)}
                        size="small"
                    />
                </InputContainer>
                <Button onClick={signUp}>Cadastrar</Button>
            </LoginContainer>
        </Container>

    );
}

export default Login;