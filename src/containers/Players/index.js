import React, { useState,useEffect } from 'react'
import { Container, Title, ListUsersWrapper } from './styled'
import TextInput from '../../components/Input'
import ListUsers from '../../components/ListUsers'
import _ from 'lodash'
import Button from '../../components/button'
import Api from '../../services/Api'

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
        console.log('userData',users)
        const results = userData && userData.filter(user =>{
          if(user.username.toLowerCase().includes(searchPlayer)){
            return user
          }
          return null;
        }
        );
        setSearchResults(results);
      }, [props, searchPlayer]);

      const nextPage=async()=>{
        const{users, setPlayers} = props
        const next = _.get(users, '_links.next.href', [])
        await Api.customEndPoint(next).then(res => {
          // const users = _.get(res.data, '_embedded.users', [])
          setPlayers(res.data)
      })
        
      }

        return (
            <Container>
                <Title>Ranking of Zuppers</Title>
                <TextInput
                label="Search Player"
                value={searchPlayer}
                onChange={handleChange}
                />
                <ListUsersWrapper>
                    <ListUsers users={searchResults} unlimited />
                </ListUsersWrapper>
                {userData.length>1 && <Button onClick={nextPage}> Próxima página</Button>}
            </Container>

        );
}

export default Players;