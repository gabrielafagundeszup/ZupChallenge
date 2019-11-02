import React, { Component,useState,useEffect } from 'react'
import { Container, Title, ListUsersWrapper } from './styled'
import TextInput from '../../components/Input'
import ListUsers from '../../components/ListUsers'
import _ from 'lodash'

function Players(props){

    const [searchPlayer, setSearchPlayer] = useState("");
    const [searchResults, setSearchResults] = React.useState(props.users);

    

    const handleChange = event => {
        setSearchPlayer(event.target.value);
      };
      useEffect(() => {
        const { users } = props;
        const results = users.filter(user =>
          user.username.toLowerCase().includes(searchPlayer)
        );
        setSearchResults(results);
      }, [searchPlayer]);

        return (
            <Container>
                <Title>Ranking of Zuppers</Title>
                <TextInput
                    value={searchPlayer}
                   onChange={handleChange}
                />
                <ListUsersWrapper>
                    <ListUsers users={searchResults} unlimited />
                </ListUsersWrapper>
            </Container>

        );
}

export default Players;