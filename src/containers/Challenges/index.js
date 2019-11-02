import React, { useState } from 'react'
import services from '../../services/Services'
import Challenge from '../../components/challenge'
import {Container} from './styled'

const Challenges = () =>{

    const getChallenges = async () =>{
        return await services.getChallenges();
    }

    const [challenges, setChallenges] = useState(() => getChallenges())

    return(
        <Container>
            <Challenge status="PROGRESS"/>
        </Container>
        
    );
}

export default Challenges;