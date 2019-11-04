import React, {useState} from 'react'
import { Container, Title, ButtonContainer, TitleRanking, BolderText, LightText, DescriptionContainer, Separator, GameContainer, ButtonRankingContainer } from './styled'
import Clock from '../../components/countdown'
import Button from '../../components/button'
import ListUsers from '../../components/ListUsers'
import _ from 'lodash'
import moment from 'moment'

function Home (props){
    const obj = {
        id: "e7477450-9aa8-4227-9bfb-ca8e6c21492b",
        name: "Vixe, agora complicou 😬",
        reward: { 
            name: "Boa Pessoa", 
            description: "Além de bom programador, você provou que é uma pes…om muita empatia e tem muito a acrescentar na Zup",
            basePointRate: 13
            },
        status: "MISSED",
        validFrom: "2019-11-04T12:00:00.780Z",
        validThrough: "2019-11-02T18:00:00.780Z"
    }
    const[invalidDate,setInvalidDate]= useState(false);
    const { users, challenges } = props;
    const userData = _.get(users, '_embedded.users', [])
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    const current = _.filter(challengeData, ['status', 'IN_PROGRESS'])
    const title = _.get(current[0], 'name',[])
    const date = moment(current.validFrom).format("YYYY-MM-DD HH:MM")
    const id = _.get(current[0], 'id',[])
    const habilityChallenge = invalidDate>= 0 ? true : false
    return (
        <Container>
            <GameContainer>
                <Title>{title}</Title>
                <div>
                    {habilityChallenge && <Clock setInvalidDate={setInvalidDate} deadline={date} />}
                </div>
                <ButtonContainer>
                    <Button type="big" path={`/challenge/now/${id}`} disabled={!habilityChallenge}> Play the game</Button>
                </ButtonContainer>
            </GameContainer>
            <TitleRanking>Ranking of Zuppers</TitleRanking>
            <Separator></Separator>
            <DescriptionContainer>
                <BolderText>Aqui você pode ver o ranking do nosso desafio</BolderText>
                <LightText>Lembrando que os pontos são acumulados a cada dia e a grande final será na convenção com premiação no evento para os 3 zuppers que mais acertarem</LightText>
            </DescriptionContainer>
            <ListUsers users={userData} />
            <ButtonRankingContainer>
                <Button path="/players" disabled> See all ranking</Button>
            </ButtonRankingContainer>
        </Container>

    );
}

export default Home;