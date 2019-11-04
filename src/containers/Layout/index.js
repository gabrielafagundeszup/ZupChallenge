import React, {useState} from 'react';
import Nav from '../../components/Navbar'
import BodyApp from '../../components/body'

function Layout(){
    const [auth, setAuth] = useState({});
    return (
        <>
        <Nav auth={auth} setAuth={setAuth}/>
        <BodyApp auth={auth} setAuth={setAuth}></BodyApp>
        </>
    );

}

export default Layout;