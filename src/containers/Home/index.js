import React from 'react'
import {Container, Title, ButtonContainer} from './styled'
import Countdown from '../../components/countdown'
import AnimatedBackgroundColor from '../../components/AnimatedBackgroundColor'
import Button from '../../components/button'

const Home = () =>{
    return(
        <Container>
            <AnimatedBackgroundColor/>
            <Title>Titulo do desafio</Title> 
            <div>
            <Countdown timeTillDate="11 01 2019, 8:00 pm"/>
            </div>
            <ButtonContainer>
                <Button type="big" disabled> Play the game</Button>
            </ButtonContainer>
           
        </Container>
        
    );
}

export default Home;