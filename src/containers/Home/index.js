import React from 'react'
import { Container, Title, ButtonContainer, TitleRanking, BolderText, LightText, DescriptionContainer, Separator, GameContainer,ButtonRankingContainer } from './styled'
import Countdown from '../../components/countdown'
import AnimatedBackgroundColor from '../../components/AnimatedBackgroundColor'
import Button from '../../components/button'
import ListUsers from '../../components/ListUsers'

const Home = props => {
    const {users} = props;
    return (
        <Container>
            {/* <AnimatedBackgroundColor /> */}
            <GameContainer>
                <Title>Titulo do desafio</Title>
                <div>
                    <Countdown timeTillDate="11 01 2019, 8:00 pm" />
                </div>
                <ButtonContainer>
                    <Button type="big" disabled> Play the game</Button>
                </ButtonContainer>
            </GameContainer>

            <TitleRanking>Ranking of Zuppers</TitleRanking>
            <Separator></Separator>
            <DescriptionContainer>
                <BolderText>Aqui você pode ver o ranking do nosso desafio</BolderText>
                <LightText>Lembrando que os pontos são acumulados a cada dia e a grande final será na convenção com premiação no evento para os 3 zuppers que mais acertarem</LightText>
            </DescriptionContainer>
            <ListUsers users={users} />

            <ButtonRankingContainer>
                <Button path="/players" disabled> See all ranking</Button>
            </ButtonRankingContainer>
        </Container>

    );
}

export default Home;