import React,{useState, useEffect} from 'react';
import { Navbar, Container, Menu,ItemContainer, ItemMenu } from './styled'
import Button from '../../components/button'
import Api from '../../services/Api'
import _ from 'lodash'

function Nav(props){
    const {auth, setAuth} = props;
    const [userLogged,setUserLogged] = useState();
    // console.log(auth);

    useEffect(() => {
        const {auth} = props;
        auth && getUserData();
      }, [props]);

      const getUserData = async () => {
        const {auth} = props;
        const url = _.get(auth,"_links.dashboard.href", '')
        await Api.customEndPoint(url).then(res => {
            setUserLogged(res.data)
        })
      }

      const logout = async () => {
        const url = _.get(userLogged,"_links.logout.href", '')
        await Api.customEndPoint(url).then(res => {
            console.log(res.data)
        }).catch(function(e){
            console.log(e.response)
        });
      }

    return (
        <Navbar>
            <Container>
                <Menu>
                    <ItemContainer>
                        <ItemMenu to="/">Home</ItemMenu>
                        <ItemMenu to="/challenges">Challenge</ItemMenu>
                        <ItemMenu to="/players">Players</ItemMenu>
                        <ItemMenu to="/infos">Infos</ItemMenu>
                    </ItemContainer>
                    {!userLogged ?
                    <Button path="/login">
                        Quero Participar
                    </Button>
                    : (
                        <>
                    {userLogged.email}
                    <Button onClick={logout}>
                        Sair
                    </Button>
                    </>
                    )
                    }
                </Menu>
            </Container>
        </Navbar>
    );
}

export default Nav;