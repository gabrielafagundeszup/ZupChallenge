import React from 'react'
import { Container, Title, ChallengesWrap, ChallengeItem } from './styled'
import _ from 'lodash'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


function Challenges(props) {

    const { challenges } = props;
    let { path, url } = useRouteMatch();
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    const renderChallenges = challengeData && challengeData.map((item, index) => {
        console.log(item)
        return <Link to={`/challenge/now/${item.id}`}><ChallengeItem>{item.name}</ChallengeItem></Link>
    })
    console.log('challenges', challengeData)
    return (
        <Container>
            <Title>Challenges</Title>
            <ChallengesWrap>
            {renderChallenges}
                </ChallengesWrap>

        </Container>

    );
}

export default Challenges;