import React from 'react';
import Nav from '../../components/Navbar'
import BodyApp from '../../components/body'

const Layout = () => {
    return (
        <>
        <Nav />
        <BodyApp>
            <div>Body</div>
        </BodyApp>
        </>
    );

}

export default Layout;