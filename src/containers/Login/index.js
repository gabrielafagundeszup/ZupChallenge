import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Container, Title, LoginContainer, InputContainer, FormBox,SignUpContainer,LoginImage,SignUpDescription,ErrorContainer } from './styled'
import Input from '../../components/Input'
import Button from '../../components/button'
import Api from "../../services/Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import SignUpImg from '../../core/assets/img/signup.svg'

function Login(props) {
    const { setAuth } = props;
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
                setError(null)
            })
                .catch(function (e) {
                    console.log(e.response)
                    // setError(e.response.data.message)
                });
        }

    }
    // const showError = error && <ErrorContainer>{error}</ErrorContainer>
    return (
        <Container>
            <FormBox>
                
                <LoginContainer>
                <Title>Login</Title>
                {/* {showError} */}
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
                <SignUpContainer>
                    <LoginImage src={SignUpImg} alt="Logo" />
                    <SignUpDescription>Ainda não faz parte do nosso desafio? É só clicar no botão abaixo e se cadastrar  :)</SignUpDescription>
                    <Button path="/signup">Quero Participar</Button>
                </SignUpContainer>
            </FormBox>

        </Container>

    );
}

export default Login;