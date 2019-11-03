import React from 'react'
import { Container, Title } from './styled'
import _ from 'lodash'
import Challenge from '../../components/challenge'
import { useParams } from "react-router-dom";

function ActualChallenge(props){
    const {challenges} = props;
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    let { id } = useParams();
    const current = _.filter(challengeData,['id', id])
    return(
        <Container>
            <Title>Actual Challenge</Title>
            <Challenge current={current} status="PROGRESS"/>
        </Container>
        
    );
}

export default ActualChallenge;