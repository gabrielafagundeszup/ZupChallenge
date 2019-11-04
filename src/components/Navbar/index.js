import React, { useState, useEffect } from 'react';
import { Navbar, Container, Menu, ItemContainer, ItemMenu, SignOut, ItemContainerMobile, MenuMobileContainer, SpanMenu } from './styled'
import Button from '../../components/button'
import Api from '../../services/Api'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(props) {
    const { auth, setAuth } = props;
    const [userLogged, setUserLogged] = useState();
    const [menuMobile, setMenuMobile] = useState(false);

    const getUserData = async () => {
        const { auth } = props;
        const url = _.get(auth, "_links.dashboard.href", '')
        await Api.customEndPoint(url).then(res => {
            setUserLogged(res.data)
        })
    }

    useEffect(() => {
        const { auth } = props;
        auth && getUserData();
    }, [getUserData, props]);

    useEffect(() => {
        setMenuMobile(false)
    },[]);

    const logout = async () => {
        await Api.logout().then(res => {
            setAuth(res.data)
            setUserLogged(res.data)
        }).catch(function (e) {
            console.log(e.response)
        });
    }

    const handleMenu = () =>{
        setMenuMobile(!menuMobile)
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
                    <ItemContainerMobile onClick={() => handleMenu()}>
                        <FontAwesomeIcon onClick={logout} icon={faBars} />
                        {menuMobile &&
                            <MenuMobileContainer onClick={()=>handleMenu()}>
                                <ItemMenu to="/"><SpanMenu>Home </SpanMenu></ItemMenu>
                                <ItemMenu to="/challenges"><SpanMenu>Challenge</SpanMenu></ItemMenu>
                                <ItemMenu to="/players"><SpanMenu>Players</SpanMenu></ItemMenu>
                                <ItemMenu to="/infos"><SpanMenu>Infos</SpanMenu></ItemMenu>
                            </MenuMobileContainer>
                        }
                    </ItemContainerMobile>
                    <Button path="/login">
                        Quero Participar
                    </Button>
                    {userLogged &&
                        <SignOut>
                            {userLogged.email}
                            <FontAwesomeIcon onClick={logout} icon={faSignOutAlt} />
                        </SignOut>
                    }
                </Menu>
            </Container>
        </Navbar>
    );
}

export default Nav;