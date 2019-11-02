import React,{ useState } from 'react'
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
import services from '../../services/Services'
import Challenge from '../../components/challenge'


function Challenges(props) {

    const { challenges } = props;
    let { path, url } = useRouteMatch();
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    const renderChallenges = challengeData && challengeData.map((item, index) => {
        console.log(item)
        return <Link to={`/challenge/now/${item.id}`}><ChallengeItem>{item.name}</ChallengeItem></Link>
    })
    const getChallenges = async () =>{
        return await services.getChallenges();
    }

    const [challenges, setChallenges] = useState(() => getChallenges())
    console.log('challenges', challengeData)
    return (
        <Container>
            <Challenge status="PROGRESS"/>
            <Title>Challenges</Title>
            <ChallengesWrap>
            {renderChallenges}
                </ChallengesWrap>

        </Container>

    );
}

export default Challenges;