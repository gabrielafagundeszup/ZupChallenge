import React, {Component} from 'react'
import { Route, Switch } from "react-router-dom";
import services from "../../services/Services";
import { BodyBackground,BodyContainer,CenterContainer } from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'
import Particles from 'react-particles-js';

class BodyApp extends Component{
    
     getUsers = async () =>{
        const users = await services.getUsers().then(res => {
            console.log(res);
          });
    }

    componentDidMount(){
        this.getUsers();
    }
    
    render(){
  const users = [
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Alice",
        email: "alice@people.me",
        points: 92556,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Bob",
        email: "bob@people.me",
        points: 87726,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Bob",
        email: "bob@people.me",
        points: 100000,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Bob",
        email: "bob@people.me",
        points: 23823,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Alice",
        email: "alice@people.me",
        points: 12356,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Alice",
        email: "alice@people.me",
        points: 3453,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "Alice",
        email: "alice@people.me",
        points: 1231,
        _links: {
            self: {
                href: "/users/00000000-0000-0000-0000-000000000000"
            }
        }
    },
]
  

return (
    <BodyBackground>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      
      <BodyContainer>
        <CenterContainer>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home users={users} />}
        />
        <Route
          path="/players"
          component={() => <Players users={users} />}
        />
        <Route
          path="/challenges"
          component={() => <Challenges />}
        />
        <Route
          path="/infos"
          component={() => <Infos />}
        />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
      </CenterContainer>
      </BodyContainer>
    </BodyBackground>
  )
}
}

export default BodyApp