import React from 'react'
import {Container} from './styled'
import Countdown from '../../components/countdown'

const Home = () =>{
    return(
        <Container>
<Countdown timeTillDate="11 01 2019, 8:00 pm"/>
        </Container>
        
    );
}

export default Home;