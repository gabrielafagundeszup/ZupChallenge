import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Container, Title, LoginContainer, InputContainer } from './styled'
import Input from '../../components/Input'
import Button from '../../components/button'
import Api from "../../services/Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Login(props) {
    const { auth, setAuth } = props;
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const redirectToHome = () => {
        history.push("/");
    }


    const handleUser = event => {
        setUsername(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };


    const setLogin = async () => {
        if (username && password) {
            const obj = {
                user: username,
                password: password
            }
            await Api.authUser(obj).then(response => {
                setAuth(response.data)
                localStorage.setItem('access_token', response.data.token);
                redirectToHome()
            })
                .catch(function (e) {
                    setError(e.response.data.message)
                });
        }

    }
    return (
        <Container>
            <LoginContainer>
                <Title>Login</Title>
                <InputContainer>
                    <Input
                        label="Username"
                        value={username}
                        onChange={handleUser}
                        size="small"
                        icon={<FontAwesomeIcon icon={faUser} />}
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        size="small"
                    />
                </InputContainer>
                <Button onClick={setLogin}>Login</Button>
            </LoginContainer>
        </Container>

    );
}

export default Login;