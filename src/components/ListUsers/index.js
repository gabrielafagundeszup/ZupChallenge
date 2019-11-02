import React from 'react'
import { Container, InfoDescription, NameDescription, UserContainer, Name, SmallText, Index,Points } from './styled'
import _ from 'lodash'

const ListUsers = props => {
    const { users } = props;
    console.log('user', users)
    const renderUser = _.orderBy(users, ['points'], ['desc']).slice(0, 5).map((user, index) => {
        return (
            <Container className="users">
                <InfoDescription>
                    <Index>
                        #{index + 1}
                    </Index>
                    <NameDescription>
                        <Name>{user.username}</Name>
                        <SmallText>{user.email}</SmallText>
                    </NameDescription>
                </InfoDescription>
                <div>
                    <Points>{user.points} <SmallText>pts</SmallText></Points>
                </div>
            </Container>
        );
    })
    return (
        <UserContainer>
            {renderUser}
        </UserContainer>
    );
}

export default ListUsers;