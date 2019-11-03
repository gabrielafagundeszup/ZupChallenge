import React from 'react';
import { Navbar, Container, Menu,ItemContainer, ItemMenu } from './styled'
import Button from '../../components/button'

const Nav = () => {
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
                    <Button path="/login">
                        Quero Participar
                    </Button>
                </Menu>
            </Container>
        </Navbar>
    );
}

export default Nav;