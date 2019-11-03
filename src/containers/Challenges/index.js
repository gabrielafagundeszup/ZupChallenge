import React from 'react'
import { Container, Title, ChallengesWrap, ChallengeItem, ChallengeLink, IconBox, TitleContainer, IconContainer } from './styled'
import _ from 'lodash'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faTimesCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'


function Challenges(props) {
    
    const { challenges } = props;
    const challengeData = _.get(challenges, '_embedded.challenges', [])
    const renderChallenges = challengeData && challengeData.map((item, index) => {
        const today = moment();
        // const Finish = item.validThrough;
        // const Start = item.validFrom;
        let isAfter = moment(item.validThrough).isAfter(today);
        let isBefore = moment(item.validFrom).isBefore(today);
        let status = '';

        if (isBefore && isAfter) {
            status = 'Moment';
        }

        if (isBefore && !isAfter) {
            status = 'Finish';
        }

        if (!isBefore && isAfter) {
            status = 'Schedule';
        }

        return (
            <ChallengeLink key={item.id} status={status} to={status === 'Moment' ? `/challenge/now/${item.id}` : `/challenges`}>
                <ChallengeItem status={status}>
                    <IconContainer>
                        <IconBox>
                            {status === 'Moment' &&
                                <>
                                    <FontAwesomeIcon icon={faPlayCircle} />
                                    <span>Desafio Atual</span>
                                </>
                            }
                            {status === 'Finish' &&
                                <>
                                    <FontAwesomeIcon icon={faTimesCircle} />
                                    <span>Desafio Encerrado</span>
                                </>
                            }
                            {status === 'Schedule' &&
                                <>
                                    <FontAwesomeIcon icon={faLock} />
                                    <span>Desafio Bloqueado</span>
                                </>
                            }
                        </IconBox>


                    </IconContainer>
                    <TitleContainer status={status}>
                        {item.name}
                    </TitleContainer>

                </ChallengeItem>
            </ChallengeLink>
        )
    }

    )
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