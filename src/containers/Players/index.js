import React, { useState,useEffect } from 'react'
import { Container, Title, ListUsersWrapper } from './styled'
import TextInput from '../../components/Input'
import ListUsers from '../../components/ListUsers'
import _ from 'lodash'

function Players(props){
    const{users} = props
    const userData = _.get(users, '_embedded.users',[])
    const [searchPlayer, setSearchPlayer] = useState("");
    const [searchResults, setSearchResults] = useState(userData);

    const handleChange = event => {
        setSearchPlayer(event.target.value);
      };

      useEffect(() => {
        const{users} = props
        const userData = _.get(users, '_embedded.users', [])
        const results = userData && userData.filter(user =>{
          if(user.username.toLowerCase().includes(searchPlayer)){
            return user
          }
        }
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