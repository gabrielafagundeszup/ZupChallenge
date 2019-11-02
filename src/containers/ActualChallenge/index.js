import React from 'react'
import { Container, Title, ListUsersWrapper } from './styled'
import _ from 'lodash'

function ActualChallenge(props){
    const {challenges,match,globalStore} = props;
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    console.log('challenges',challengeData)
    return(
        <Container>
            <Title>Actual Challenge</Title>
        </Container>
        
    );
}

export default ActualChallenge;